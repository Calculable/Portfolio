"""Check built routes, links, anchors, assets, SEO, and Squarespace independence."""
from pathlib import Path
from urllib.parse import urlsplit,unquote
from source_html import parse
import json,xml.etree.ElementTree as E
root=Path(__file__).resolve().parents[1];dist=root/'dist';errors=[];oldlinks=[]
for p in dist.rglob('*.html'):
 r=parse(p.read_text())
 for n in r.all(lambda n:n.tag in ['a','img','video','script','link','iframe']):
  for attr in ['href','src','poster']:
   u=n.attrs.get(attr,'');url=urlsplit(u)
   if 'squarespace' in url.netloc and not (n.tag=='a' and url.netloc=='support.squarespace.com'):errors.append((str(p.relative_to(dist)),'Squarespace dependency',u))
   if url.netloc or url.scheme or not u:continue
   path=unquote(url.path)
   if path.startswith('/Portfolio'):path=path[len('/Portfolio'):]
   elif path.startswith('/'):errors.append((str(p.relative_to(dist)),'Missing base',u));continue
   target=(dist/path.lstrip('/')) if url.path else p
   if target.is_dir():target=target/'index.html'
   elif not target.suffix and not target.exists():target=target/'index.html'
   if not target.exists():errors.append((str(p.relative_to(dist)),'Missing target',u));continue
   if url.fragment and target.suffix=='.html':
    ids={n.attrs['id'] for n in parse(target.read_text()).all(lambda n:'id' in n.attrs)}
    if unquote(url.fragment) not in ids:errors.append((str(p.relative_to(dist)),'Missing anchor',u))
 if len(r.all(lambda n:n.tag=='title'))!=1:errors.append((str(p),'title'))
 if len(r.all(lambda n:n.tag=='link' and n.attrs.get('rel')=='canonical'))!=1:errors.append((str(p),'canonical'))
for u in E.parse(root/'migration/source/sitemap.xml').getroot():
 path=urlsplit(u[0].text).path.lstrip('/')
 if not (dist/path/'index.html').exists():errors.append(('sitemap','Missing page',path))
print('Pages:',len(list(dist.rglob('*.html'))),'Errors:',len(errors))
for e in errors:print(e)
raise SystemExit(bool(errors))
