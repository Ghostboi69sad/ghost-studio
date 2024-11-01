"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const s3_config_1 = require("../../lib/aws/s3-config");
const client_s3_1 = require("@aws-sdk/client-s3");
const validateFile = (file) => {
    const MAX_SIZE = 1000 * 1024 * 1024; // 100MB
    const ALLOWED_TYPES = ['video/mp4', 'application/pdf'];
    if (file.size > MAX_SIZE) {
        throw new Error('File too large');
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
        throw new Error('Invalid file type');
    }
};
const handler = async (event) => {
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
        const command = new client_s3_1.PutObjectCommand({
            Bucket: s3_config_1.bucketName,
            Key: `courses/media/${fileName}`,
            Body: Buffer.from(file, 'base64'),
            ContentType: contentType,
            ACL: 'public-read'
        });
        await s3_config_1.s3Client.send(command);
        return {
            statusCode: 200,
            body: JSON.stringify({
                url: `https://${s3_config_1.bucketName}.s3.amazonaws.com/courses/media/${fileName}`
            })
        };
    }
    catch (error) {
        console.error('Error uploading to S3:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'فشل في رفع الملف' })
        };
    }
};
exports.handler = handler;
