import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.css': 'text/css; charset=utf-8', '.obj': 'text/plain; charset=utf-8', '.csv': 'text/csv; charset=utf-8', '.svg': 'image/svg+xml' };
function safePath(urlPath) {
  const pathname = decodeURIComponent((urlPath || '/').split('?')[0]);
  const relative = pathname === '/' ? 'index.html' : pathname === '/manus-routes.json' ? 'public/manus-routes.json' : pathname.replace(/^\/+/, '');
  const candidate = path.normalize(path.join(root, relative));
  return candidate.startsWith(root) ? candidate : null;
}
const server = http.createServer(async (req, res) => {
  const file = safePath(req.url);
  if (!file) { res.writeHead(400); res.end('Bad request'); return; }
  try {
    const info = await stat(file);
    if (!info.isFile()) throw new Error('Not a file');
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    createReadStream(file).pipe(res);
  } catch {
    if (req.url?.split('?')[0] !== '/') {
      try { const html = await readFile(path.join(root, 'index.html')); res.writeHead(200, { 'Content-Type': mime['.html'], 'Cache-Control': 'no-cache' }); res.end(html); return; } catch {}
    }
    res.writeHead(404); res.end('Not found');
  }
});
server.listen(port, '0.0.0.0', () => console.log(`Talca 3D listening on ${port}`));
