// src/lib/prismic.ts
import * as prismic from '@prismicio/client';

// Use the CDN endpoint (faster + removes the warning)
const endpoint = 'https://moto-webs.cdn.prismic.io/api/v2';

export const createClient = (options = {}) =>
  prismic.createClient(endpoint, {
    ...options,
    // accessToken: process.env.PRISMIC_ACCESS_TOKEN, // only if private
  });
