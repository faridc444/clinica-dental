// src/pages/ServicePage.jsx
// Página individual de un tratamiento (una URL propia para cada servicio).
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { BUSINESS, fullAddress } from '../seo.js';
import { services } from '../data/services.js';

function ServicePage({ service }) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <article className="service">
      <header className="service-hero">
        <div className="service-hero-text">
          <p className="breadcrumb">
            <Link to="/">Inicio</Link> › <Link to="/#tratamientos">Tratamientos</Link> › {service.name}
          </p>
          <h1>{service.h1}</h1>
          <p className="service-intro">{service.intro}</p>
          <Link to="/reservar" className="btn-primary">
            <Calendar size={18} /> Reservar evaluación
          </Link>
        </div>
        <img src={service.img} alt={`${service.name} en Dental Córdova, La Molina`} width="480" height="360" />
      </header>

      <div className="service-body">
        {service.sections.map((sec) => (
          <section key={sec.title}>
            <h2>{sec.title}</h2>
            <p>{sec.text}</p>
          </section>
        ))}

        <section>
          <h2>Preguntas frecuentes sobre {service.name.toLowerCase()}</h2>
          {service.faqs.map((f) => (
            <details key={f.q} className="faq">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        <section className="service-cta">
          <h2>Agenda tu cita en La Molina</h2>
          <p>
            Te esperamos en <strong>{fullAddress}</strong>. {BUSINESS.hoursDisplay}.
          </p>
          <div className="cta-buttons">
            <Link to="/reservar" className="btn-primary">Solicitar una consulta</Link>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>

        <nav aria-label="Otros tratamientos" className="other-services">
          <h2>Otros tratamientos</h2>
          <ul>
            {others.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}

export default ServicePage;
