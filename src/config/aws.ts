import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  }
});

export const S3_BUCKET = import.meta.env.VITE_S3_BUCKET;
export const CLOUDFRONT_URL = import.meta.env.VITE_CLOUDFRONT_URL; 