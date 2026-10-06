import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.jan-huber.ch',
  base: '/',
  output: 'static',
  redirects: {
    '/rushy-beats': '/rushy-beat/',
    '/rushy-beats/contact': '/rushy-beat/contact/',
    '/rushy-beats/privacy-policy': '/rushy-beat/privacy-policy/',
  },
});
