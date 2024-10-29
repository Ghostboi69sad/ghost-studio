declare module '@netlify/functions' {
  export interface Context {
    // أضف أي خصائص سياق تستخدمها هنا
  }

  export type Handler = (event: any, context: Context) => Promise<{
    statusCode: number;
    body: string;
  }>;
}
