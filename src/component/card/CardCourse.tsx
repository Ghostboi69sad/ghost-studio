import React from "react";

interface CardCourseProps {
  obj: {
    title: string;
    review: number;
    tag: string;
    img: string;
  }
}

const CardCourse: React.FC<CardCourseProps> = ({ obj }) => {
  return (
    <div className="wrapper__card-course">
      <div className="position-relative mb-3">
        <img src={obj.img} alt={obj.title} className="img" />
        <div className="play">
          <img src="./../images/play.png" alt="play" />
        </div>
      </div>
      <div className="about">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="tag">
            <span className="normal font__size--14 text__14-1024 color__blue">
              {obj.tag}
            </span>
          </div>
          <div className="star d-flex align-items-center">
            <img src="./../images/star.png" alt="star" />
            <span className="normal font__size--14 text__14-1024 color__gray-2">
              {obj.review}
            </span>
          </div>
        </div>
        <h5 className="semi-bold font__size--16 text__16-1024 color__black">
          {obj.title}
        </h5>
      </div>
    </div>
  );
};

export default CardCourse; 