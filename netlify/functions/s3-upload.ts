import { Handler, HandlerEvent } from '@netlify/functions';
import { s3Client, bucketName } from '../../lib/aws/s3-config';
import { PutObjectCommand } from '@aws-sdk/client-s3';

const validateFile = (file: any) => {
  const MAX_SIZE = 1000 * 1024 * 1024; // 100MB
  const ALLOWED_TYPES = ['video/mp4', 'application/pdf'];
  
  if (file.size > MAX_SIZE) {
    throw new Error('File too large');
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error('Invalid file type');
  }
};

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // التحقق من الصلاحيات
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No file data provided' })
      };
    }

    const { file, fileName, contentType } = JSON.parse(event.body);

    validateFile(file);

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: `courses/media/${fileName}`,
      Body: Buffer.from(file, 'base64'),
      ContentType: contentType,
      ACL: 'public-read'
    });

    await s3Client.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({
        url: `https://${bucketName}.s3.amazonaws.com/courses/media/${fileName}`
      })
    };

  } catch (error) {
    console.error('Error uploading to S3:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'فشل في رفع الملف' })
    };
  }
}; 