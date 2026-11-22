// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { BUSINESS } from '../seo.js';
import { services } from '../data/services.js';

function Home() {
  return (
    <div>
      {/* HERO: el H1 combina palabras clave reales + ubicación */}
      <section className="hero">
        <h1>Clínica dental en La Molina: ortodoncia, alineadores y estética dental</h1>
        <p>
          Recupera la tranquilidad de sonreír. Atención personalizada en {BUSINESS.name},
          Santa Patricia, La Molina.
        </p>
        <div className="cta-buttons">
          <Link to="/reservar" className="btn-primary">Reservar una cita</Link>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            WhatsApp
          </a>
        </div>
      </section>

      {/* BIENVENIDA */}
      <section className="intro">
        <h2>Tu dentista de confianza en Santa Patricia, La Molina</h2>
        <p>
          En {BUSINESS.name} somos un equipo de profesionales en odontología comprometidos con
          tu salud bucal y la de tu familia. Atendemos a niños, adolescentes y adultos de La Molina
          y distritos cercanos, con tratamientos de ortodoncia con brackets, alineadores
          invisibles, curaciones estéticas con resina, blanqueamiento dental y prótesis dentales.
        </p>
        <p>
          En cada consulta te explicamos tu diagnóstico y tus opciones con claridad, para que
          tomes la mejor decisión sin presiones.
        </p>
      </section>

      {/* TRATAMIENTOS: cada tarjeta enlaza a su propia página */}
      <section id="tratamientos" className="treatments">
        <h2>Nuestros tratamientos dentales</h2>
        <div className="treatment-grid">
          {services.map((s) => (
            <Link key={s.slug} to={`/${s.slug}`} className="treatment-card">
              <div className="treatment-img-wrap">
                <img
                  src={s.img}
                  alt={`${s.name} en La Molina`}
                  className="treatment-img"
                  loading="lazy"
                  width="400"
                  height="280"
                />
              </div>
              <div className="treatment-text">
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="more">Ver tratamiento →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACTO Y MAPA */}
      <section id="contacto" className="contact">
        <h2>Visítanos en Santa Patricia, La Molina</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contacto directo</h3>
            <p>📍 <strong>Dirección:</strong> {BUSINESS.street}, {BUSINESS.neighborhood}, {BUSINESS.district}.</p>
            <p>⏰ <strong>Atención:</strong> {BUSINESS.hoursDisplay}</p>
            <p>📞 <strong>Teléfono / WhatsApp:</strong> <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phoneDisplay}</a></p>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Reservar cita por WhatsApp
            </a>
          </div>
          <div className="map">
            <iframe
              title={`Ubicación de ${BUSINESS.name} en Google Maps`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.803738410283!2d-76.94434!3d-12.067503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c701cc3a81cb%3A0x67456d69a94f6959!2sDentistas%20C%C3%B3rdova!5e0!3m2!1ses-419!2spe!4v1737602381234!5m2!1ses-419!2spe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
