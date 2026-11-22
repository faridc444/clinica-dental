// src/entry-server.jsx
// Solo se usa en el build: genera el HTML de cada ruta para que Google
// (y WhatsApp/Facebook al compartir el link) vean el contenido sin ejecutar JavaScript.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

export { routes, SITE_URL, dentistJsonLd } from './seo.js';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
