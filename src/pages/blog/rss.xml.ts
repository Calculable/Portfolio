import type { APIRoute } from 'astro';
import { articles, day, parts } from '../../components/blog/articles';
const escape = (value:string) => value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
export const GET: APIRoute = ({site}) => {
  const home = new URL('/blog/',site).href;
  const items = articles.map(a => {
    const url = home + encodeURIComponent(a.slug) + '/';
    const description = parts(a.photos[0].caption).map(p=>p.text).join('');
    return `<item><title>${escape(a.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(day(a)+'T12:00:00Z').toUTCString()}</pubDate><description>${escape(description)}</description></item>`;
  });
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Jan Huber Fotografie</title><link>${home}</link><description>Fotografien von Jan Huber</description><language>de-CH</language>${items.join('')}</channel></rss>`,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
};
