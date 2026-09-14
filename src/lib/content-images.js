import dimensions from '../content/image-dimensions.json';

// Standard Markdown image + optional italic paragraph → image with a caption.
// This runs at build time; no image script is shipped to the browser.
export function formatContentImages(html) {
  return html.replace(
    /<p>((?:<a\b[^>]*>)?<img\b[^>]*>(?:<\/a>)?)<\/p>(?:\s*<p><em>([\s\S]*?)<\/em><\/p>)?/g,
    (_, image, caption) => {
      const source = image.match(/\bsrc="([^"]*)"/)?.[1];
      const size = dimensions[source];
      const attributes = `${size ? ` width="${size[0]}" height="${size[1]}"` : ''} loading="lazy" decoding="async"`;
      image = image.replace(/<img\b/, `<img${attributes}`);
      return `<figure class="content-figure">${image}${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
    },
  );
}
