export const cloudfrontDomain = process.env.VITE_CLOUDFRONT_DOMAIN;

export const getMediaUrl = (key: string) => {
  if (!cloudfrontDomain) {
    return key; // إرجاع الرابط الأصلي إذا لم يتم تكوين CloudFront
  }
  // تحويل الرابط الكامل إلى مسار نسبي
  const path = key.replace(/^https?:\/\/[^\/]+\//, '');
  return `https://${cloudfrontDomain}/${path}`;
}; 