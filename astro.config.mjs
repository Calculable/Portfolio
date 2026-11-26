import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.jan-huber.ch',
  base: '/',
  output: 'static',
  redirects: {
    "/endless-peaks-app": "/endless-peaks-animations/",
    "/endless-peaks/contact": "/endless-peaks-animations/contact/",
    "/endless-peaks/privacy-policy": "/endless-peaks-animations/privacy-policy/",
    '/rushy-beats': '/rushy-beat/',
    '/rushy-beats/contact': '/rushy-beat/contact/',
    '/rushy-beats/privacy-policy': '/rushy-beat/privacy-policy/',
  },
});
