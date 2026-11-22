// src/components/Layout.jsx
import { useEffect } from 'react';
import { MessageCircle, Clock, Phone, MapPin, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS, SITE_URL, getRouteMeta } from '../seo.js';
import { services } from '../data/services.js';

// Al navegar dentro de la app, actualiza título, descripción y canonical
// (el HTML prerenderizado ya los trae; esto mantiene todo coherente después).
function useRouteMeta() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const meta = getRouteMeta(pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE_URL + meta.path);
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}

function Layout({ children }) {
  useRouteMeta();

  return (
    <div className="site">
      {/* 1. BARRA SUPERIOR INFORMATIVA */}
      <div className="top-bar">
        <span><Clock size={14} color="#0ea5e9" /> Lun - Sáb: 9:00 a. m. - 9:00 p. m.</span>
        <a href={`tel:${BUSINESS.phoneE164}`}><Phone size={14} color="#0ea5e9" /> {BUSINESS.phoneDisplay}</a>
        <span className="top-bar-location"><MapPin size={14} color="#0ea5e9" /> Santa Patricia, La Molina</span>
      </div>

      {/* 2. HEADER PRINCIPAL */}
      <header className="site-header">
        <Link to="/" className="brand" aria-label="Dental Córdova, ir al inicio">
          Dental <span>Córdova</span>
        </Link>

        <nav className="site-nav">
          <Link to="/">Inicio</Link>
          <Link to="/#tratamientos">Tratamientos</Link>
          <Link to="/#contacto">Contacto</Link>
          <Link to="/reservar" className="nav-cta">
            <Calendar size={16} /> Solicitar una consulta
          </Link>
        </nav>
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Escríbenos por WhatsApp"
      >
        <MessageCircle size={35} fill="white" color="#25D366" />
      </a>

      {/* FOOTER con Nombre, Dirección y Teléfono (NAP) idénticos a Google Maps */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">{BUSINESS.name}</p>
            <address>
              {BUSINESS.street}, {BUSINESS.neighborhood}
              <br />
              {BUSINESS.district}, {BUSINESS.city}, Perú
              <br />
              Teléfono / WhatsApp: <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phoneDisplay}</a>
            </address>
            <p>{BUSINESS.hoursDisplay}</p>
          </div>
          <div>
            <p className="footer-title">Tratamientos</p>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`}>{s.name} en La Molina</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} {BUSINESS.name} · Dentista en La Molina</p>
      </footer>
    </div>
  );
}

export default Layout;
