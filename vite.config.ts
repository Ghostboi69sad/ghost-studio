/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

declare global {
  interface ImportMetaEnv {
    VITE_FIREBASE_API_KEY: string;
    VITE_FIREBASE_AUTH_DOMAIN: string;
    VITE_FIREBASE_PROJECT_ID: string;
    VITE_FIREBASE_STORAGE_BUCKET: string;
    VITE_FIREBASE_MESSAGING_SENDER_ID: string;
    VITE_FIREBASE_APP_ID: string;
    VITE_FIREBASE_DATABASE_URL: string;
    VITE_STRIPE_PUBLISHABLE_KEY: string;
  }
}

export default defineConfig({
  plugins: [
    react({
      exclude: [/\.stories\.(t|j)sx?$/, /\.test\.(t|j)sx?$/],
      babel: {
        plugins: [
          '@babel/plugin-transform-react-jsx',
          ['@babel/plugin-transform-modules-commonjs', { noInterop: true }]
        ]
      }
    }), 
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      '@': '/src',
      'lib': '/lib'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // مكتبات الواجهة الأساسية
          'vendor-core': ['react', 'react-dom', 'react-router-dom'],
          
          // مكونات Radix UI
          'vendor-radix-dialog': ['@radix-ui/react-dialog'],
          'vendor-radix-accordion': ['@radix-ui/react-accordion'],
          'vendor-radix-utils': [
            '@radix-ui/react-portal',
            '@radix-ui/react-presence',
            '@radix-ui/react-focus-scope',
            '@radix-ui/react-focus-guards',
            '@radix-ui/react-dismissable-layer'
          ],
          
          // مكونات UI المشتركة
          'shared-ui': ['@/components/ui'],
          
          // مكونات الصفحات
          'page-auth': [
            '/src/container/Auth/Login',
            '/src/container/Auth/Register',
            '/src/container/Auth/ForgotPassword'
          ],
          'page-static': [
            '/src/container/About',
            '/src/container/Privacy',
            '/src/container/Terms',
            '/src/container/Faq'
          ],
          'page-blog': [
            '/src/container/Blog',
            '/src/container/BlogDetail'
          ],
          
          // المكونات الرئيسية
          'course': ['/src/course'],
          'course-listing': ['/src/course-listing'],
          'homepage': ['/src/container/Homepage']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        passes: 2
      },
      format: {
        comments: false
      }
    },
    outDir: 'dist'
  },
  optimizeDeps: {
    include: [
      'flexibility',
      '@radix-ui/react-dialog',
      '@radix-ui/react-accordion',
      '@radix-ui/react-portal',
      '@radix-ui/react-presence',
      '@radix-ui/react-focus-scope',
      '@radix-ui/react-focus-guards',
      '@radix-ui/react-dismissable-layer'
    ],
    exclude: ['@radix-ui/react-use-callback-ref']
  },
  root: './',
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
});