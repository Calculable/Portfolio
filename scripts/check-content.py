"""Verify source text and image preservation against the built site."""
from pathlib import Path
from source_html import parse
from html import unescape
import json,re,sys
root=Path(__file__).resolve().parents[1]
def norm(s):return re.sub(r'\s+','',unescape(s)).replace('\u200b','')
errors=[]
for name in sys.argv[1:]:
 md=root/'src/content/pages'/(name.replace('__','/')+'.md')
 meta=json.loads(md.read_text().split('---',2)[1]);route=meta['path']
 out=root/'dist'/route.lstrip('/')/'index.html'
 r=parse((root/'migration/source'/(name+'.html')).read_text());s=r.all(lambda n:n.tag=='main')[0]
 d=parse(out.read_text());main=d.all(lambda n:n.tag=='main')[0];text=norm(main.text())
 for n in s.all(lambda n:n.has('sqs-html-content') or n.tag=='figcaption' or n.has('image-caption')):
  value=norm(n.text())
  if value and value not in text:errors.append((name,'Missing text',n.text()[:140]))
 source_images={n.attrs.get('data-src') or n.attrs.get('src') for n in s.all(lambda n:n.tag=='img')}
 built_images={n.attrs.get('src') for n in main.all(lambda n:n.tag=='img')}
 if len(built_images)<len(source_images):errors.append((name,'Image count',len(source_images),len(built_images)))
 for n in main.all(lambda n:n.tag in ['img','video']):
  u=n.attrs.get('src','')
  if u.startswith('/Portfolio/') and not (root/'public'/u.removeprefix('/Portfolio/')).exists():errors.append((name,'Missing asset',u))
 print(name, 'text blocks',len(s.all(lambda n:n.has('sqs-html-content'))),'images',len(built_images))
for e in errors:print('ERROR',e)
raise SystemExit(bool(errors))
