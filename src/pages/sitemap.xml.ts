export const prerender = true;
export function GET({ site }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pages = import.meta.glob('../content/pages/**/*.md', { eager: true });
  const paths = new Set(['/portfolio', ...Object.values(pages).map((page) => page.frontmatter.canonicalPath ?? page.frontmatter.path)]);
  const entries = [...paths].map((path) => `<url><loc>${new URL(`${base}${path}`, site).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
