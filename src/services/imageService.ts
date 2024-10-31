import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client, S3_BUCKET, CLOUDFRONT_URL } from "../config/aws";

export const imageService = {
  // الحصول على URL للصورة
  getImageUrl: async (key: string) => {
    if (CLOUDFRONT_URL) {
      return `${CLOUDFRONT_URL}/${key}`;
    }

    const command = new GetObjectCommand({
      Bucket: S3_BUCKET,
      Key: key,
    });

    try {
      const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
      return url;
    } catch (error) {
      console.error("Error getting image URL:", error);
      return null;
    }
  },

  // رفع صورة جديدة
  uploadImage: async (file: File, path: string) => {
    const key = `${path}/${Date.now()}-${file.name}`;
    
    const command = new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: key,
      Body: file,
      ContentType: file.type,
    });

    try {
      await s3Client.send(command);
      return key;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  }
}; 