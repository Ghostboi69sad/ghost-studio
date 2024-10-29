/// <reference types="vite/client" />

import { Stripe } from '@stripe/stripe-js';

declare global {
  interface Window {
    Stripe?: (key: string) => Stripe;
  }
}

export {};
