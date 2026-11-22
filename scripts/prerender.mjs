// scripts/prerender.mjs
// Se ejecuta después de `vite build`. Por cada ruta de src/seo.js escribe
// dist/<ruta>/index.html con el contenido ya renderizado y sus metadatos,
// y genera dist/sitemap.xml y dist/404.html.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, routes, SITE_URL, dentistJsonLd } = await import(
  pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href
);

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function headFor(route) {
  const url = SITE_URL + (route.path === '/' ? '/' : route.path);
  return [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="es_PE" />`,
    `<meta property="og:site_name" content="Dental Córdova" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}/tratamiento-con-brackets.webp" />`,
    `<script type="application/ld+json">${JSON.stringify(dentistJsonLd).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
}

function page(route, appHtml) {
  return template
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, headFor(route))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

// "/" -> dist/index.html ; "/reservar" -> dist/reservar.html
// Cloudflare Pages sirve /reservar desde reservar.html sin barra final,
// que es justo la URL canónica que declaramos.
for (const route of routes) {
  const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), page(route, render(route.path)));
  console.log('prerender:', route.path, '->', file);
}

// Página 404: carga la app (que muestra el layout) pero le dice a Google que no indexe.
fs.writeFileSync(
  path.join(dist, '404.html'),
  template
    .replace(
      /<!--seo-start-->[\s\S]*?<!--seo-end-->/,
      '<title>Página no encontrada | Dental Córdova</title>\n    <meta name="robots" content="noindex" />'
    )
);

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log('sitemap.xml con', routes.length, 'URLs');
