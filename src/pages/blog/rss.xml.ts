import type { APIRoute } from 'astro';
import { articles, day, parts } from '../../components/blog/articles';

const escape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;');

export const GET: APIRoute = ({ site }) => {
  const home = new URL('/blog/', site).href;
  const items = articles.map(article => {
    const url = new URL(encodeURIComponent(article.slug) + '/', home).href;
    const html = article.photos.map(photo => {
      const src = escape(new URL(photo.image, url).href);
      const caption = parts(photo.caption).map(part => part.href
        ? `<a href="${escape(part.href)}">${escape(part.text)}</a>`
        : escape(part.text)).join('');
      return `<figure><img src="${src}" alt="${escape(photo.alt)}"><figcaption>${caption}</figcaption></figure>`;
    }).join('\n');
    const content = escape(html);
    const date = new Date(day(article) + 'T12:00:00Z').toUTCString();
    return `<item><title>${escape(article.title)}</title><link>${escape(url)}</link><guid>${escape(url)}</guid><pubDate>${date}</pubDate><description>${content}</description><content:encoded>${content}</content:encoded></item>`;
  });
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/"><channel><title>Jan Huber Fotografie</title><link>${escape(home)}</link><description>Fotografien von Jan Huber</description><language>de-CH</language>${items.join('')}</channel></rss>`, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
};
