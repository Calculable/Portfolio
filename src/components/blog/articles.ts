import records from '../../data/blog.json';
export interface Photo { image: string; captured: string; caption: string; alt: string }
export interface Article { slug: string; title: string; photos: Photo[]; date?: string; cover?: string; manualOrder?: boolean }
export const articles = (records as Article[]).filter(a => a.photos.length).map(a => ({
  ...a, photos: a.manualOrder ? [...a.photos] : [...a.photos].sort((a,b) => a.captured.localeCompare(b.captured) || a.image.localeCompare(b.image))
})).sort((a,b) => (b.date ?? b.photos[0].captured).localeCompare(a.date ?? a.photos[0].captured) || a.slug.localeCompare(b.slug));
export const day = (a: Article) => (a.date ?? a.photos[0].captured).slice(0,10);
export const overviewPhotos = (a: Article) => {
  const cover = a.photos.find(p => p.image === a.cover);
  return (cover ? [cover, ...a.photos.filter(p => p.image !== cover.image)] : a.photos).slice(0, 3);
};
export const displayDay = (a: Article) => new Date(day(a) + 'T12:00:00Z').toLocaleDateString('de-CH', {day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});
export function parts(text: string) {
  const result: {text: string; href?: string}[] = [];
  let start = 0;
  for (const match of text.matchAll(/\[([^\]\n]+)\]\((https?:\/\/[^\s()]+)\)/g)) {
    result.push({text:text.slice(start,match.index)}, {text:match[1], href:match[2]});
    start = match.index! + match[0].length;
  }
  return [...result, {text:text.slice(start)}];
}
