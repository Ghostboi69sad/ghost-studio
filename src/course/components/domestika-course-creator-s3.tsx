'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { auth } from '../../container/firebase/firebase';
import { getDatabase, ref, get } from 'firebase/database'
import { Plus, Trash2, File, Video, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Slider } from "../components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { cn } from "../lib/utils"
import axios from 'axios'
import Navbar from '../../component/Navbar/Navbar'

interface ContentItem {
  type: 'video' | 'file' | 'text';
  name: string;
  url: string;
  id?: string;
  duration?: string;
  description?: string;
}

interface Chapter {
  id?: string;
  title: string;
  content: ContentItem[];
}

interface Course {
  id: string;
  title: string;
  description?: string;
  instructor?: string;
  duration?: string;
  level?: string;
  rating?: number;
  enrolledStudents?: number;
  price?: number;
  chapters: Chapter[];
  isPublic: boolean;
}

interface DomestikaCourseCreatorS3Props {
  course: Course;
}

const DomestikaCourseCreatorS3: React.FC<DomestikaCourseCreatorS3Props> = ({ course: initialCourse }) => {
  const [course, setCourse] = useState<Course>(initialCourse);
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [newContentUrl, setNewContentUrl] = useState('')
  const [newContentName, setNewContentName] = useState('')
  const [newContentType, setNewContentType] = useState<'video' | 'file'>('video')
  const [activeChapterIndex, setActiveChapterIndex] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const navigate = useNavigate()
  const { courseId } = useParams<{ courseId: string }>()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const checkUserRole = async () => {
      const user = auth.currentUser
      if (user) {
        const db = getDatabase()
        const userRef = ref(db, `users/${user.uid}`)
        const snapshot = await get(userRef)
        if (snapshot.exists()) {
          const userData = snapshot.val()
          setIsAdmin(userData.role === 'admin')
        }
      }
    }
    checkUserRole()

    if (courseId) {
      fetchCourseData()
    }
  }, [courseId])

  const fetchCourseData = async () => {
    if (courseId) {
      try {
        const response = await axios.get(`/api/courses/${courseId}`)
        setCourse(response.data)
      } catch (error) {
        console.error('Error fetching course:', error)
      }
    }
  };

  const saveCourse = async () => {
    if (!isAdmin) {
      console.error("Only admins can save courses")
      return
    }
    try {
      if (courseId) {
        await axios.put(`/api/courses/${courseId}`, course)
      } else {
        const response = await axios.post('/api/courses', course)
        setCourse(response.data)
      }
      navigate(`/course/${course.id}`)
    } catch (error) {
      console.error('Error saving course:', error)
    }
  }

  const addChapter = () => {
    setCourse(prev => ({
      ...prev,
      chapters: [...prev.chapters, { title: `Chapter ${prev.chapters.length + 1}`, content: [] }]
    }))
  }

  const addContent = (chapterIndex: number) => {
    setActiveChapterIndex(chapterIndex)
  }

  const handleAddContent = () => {
    if (activeChapterIndex === null) return

    setCourse(prev => {
      const newChapters = [...prev.chapters]
      newChapters[activeChapterIndex].content.push({
        type: newContentType,
        name: newContentName,
        url: newContentUrl
      })
      return { ...prev, chapters: newChapters }
    })

    setNewContentUrl('')
    setNewContentName('')
    setActiveChapterIndex(null)
  }

  const removeContent = (chapterIndex: number, contentIndex: number) => {
    setCourse(prev => {
      const newChapters = [...prev.chapters]
      newChapters[chapterIndex].content.splice(contentIndex, 1)
      return { ...prev, chapters: newChapters }
    })
  }

  const handleVideoClick = (url: string) => {
    setActiveVideo(url)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.src = url
      videoRef.current.play()
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const handleSeek = (value: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value
      setCurrentTime(value)
    }
  }

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value
      setVolume(value)
      setIsMuted(value === 0)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10
    }
  }

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  if (!isAdmin && !course.isPublic) {
    // التحقق من حالة اشتراك المستخدم هنا
    // إذا لم يكن لديه اشتراك نشط، يمكنك توجيهه إلى صفحة الاشتراكات
    // navigate('/pricing');
    return <div>This course requires an active subscription.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8 text-orange-500">{course.title}</h1>
          {isAdmin && (
            <>
              {/* ... (حقول التحرير للمسؤولين) */}
            </>
          )}
          <Accordion type="single" collapsible className="w-full">
            {course.chapters.map((chapter, index) => (
              <AccordionItem key={index} value={`chapter-${index}`}>
                <AccordionTrigger>{chapter.title}</AccordionTrigger>
                <AccordionContent>
                  {chapter.content.map((item, contentIndex) => (
                    <div key={contentIndex} className="py-2">
                      {item.type === 'video' ? (
                        <button onClick={() => handleVideoClick(item.url)} className="flex items-center">
                          <Play className="mr-2" /> {item.name}
                        </button>
                      ) : (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <File className="mr-2" /> {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {isAdmin && (
            <Button onClick={saveCourse} className="mt-6 bg-green-500 hover:bg-green-600">
              Save Course
            </Button>
          )}
        </div>
        {/* ... (مشغل الفيديو) */}
      </div>
    </>
  )
}

export default DomestikaCourseCreatorS3;
