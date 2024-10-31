export const cloudfrontDomain = process.env.VITE_CLOUDFRONT_DOMAIN;

export const getMediaUrl = (key: string) => {
  if (!cloudfrontDomain) {
    return key; // إرجاع الرابط الأصلي إذا لم يتم تكوين CloudFront
  }
  // تحويل الرابط الكامل إلى مسار نسبي
  const path = key.replace(/^https?:\/\/[^\/]+\//, '');
  return `https://${cloudfrontDomain}/${path}`;
};

export const getCacheControl = (fileType: string) => {
  switch (fileType) {
    case 'video/mp4':
      return 'max-age=31536000'; // سنة واحدة
    default:
      return 'max-age=86400'; // يوم واحد
  }
}; 