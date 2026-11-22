// src/seo.js
// Datos del negocio y metadatos de cada página. Es la ÚNICA fuente de verdad:
// el nombre, la dirección y el teléfono deben coincidir exactamente con la
// ficha de Google Business Profile (Google Maps).
import { services } from './data/services.js';

export const SITE_URL = 'https://www.dentalcordova.com';

export const BUSINESS = {
  name: 'Dental Córdova',
  phoneDisplay: '+51 938 912 686',
  phoneE164: '+51938912686',
  whatsapp: 'https://wa.me/message/OQYK7VSSWFVRN1',
  street: 'Calle Piura 104, 3er piso',
  neighborhood: 'Urb. Santa Patricia',
  district: 'La Molina',
  city: 'Lima',
  country: 'PE',
  hoursDisplay: 'Lunes a sábado de 9:00 a. m. a 9:00 p. m.',
};

export const fullAddress = `${BUSINESS.street}, ${BUSINESS.neighborhood}, ${BUSINESS.district}, ${BUSINESS.city}`;

// Una entrada por URL. El prerender genera un HTML por cada una
// y el sitemap.xml se arma con esta misma lista.
export const routes = [
  {
    path: '/',
    title: 'Dentista en La Molina | Dental Córdova – Ortodoncia y Estética Dental',
    description:
      'Clínica dental en Santa Patricia, La Molina. Ortodoncia con brackets, alineadores invisibles, resinas estéticas, blanqueamiento y prótesis dentales. Reserva tu cita por WhatsApp.',
  },
  ...services.map((s) => ({
    path: `/${s.slug}`,
    title: s.metaTitle,
    description: s.metaDescription,
  })),
  {
    path: '/reservar',
    title: 'Reservar cita | Dental Córdova, dentista en La Molina',
    description:
      'Solicita tu consulta en Dental Córdova, Calle Piura 104, Santa Patricia, La Molina. Atendemos de lunes a sábado de 9:00 a. m. a 9:00 p. m.',
  },
];

export function getRouteMeta(pathname) {
  const clean = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
  return routes.find((r) => r.path === clean) ?? routes[0];
}

// Datos estructurados (schema.org) para que Google entienda que es un dentista local.
export const dentistJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${SITE_URL}/#dentist`,
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
  telephone: BUSINESS.phoneE164,
  image: `${SITE_URL}/tratamiento-con-brackets.webp`,
  priceRange: '$$',
  foundingDate: '2008-09',
  sameAs: [
    'https://www.facebook.com/dentalcordovalima',
    'https://www.instagram.com/dentalcordovalima/',
    'https://www.tiktok.com/@dentalcordova',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${BUSINESS.street}, ${BUSINESS.neighborhood}`,
    addressLocality: BUSINESS.district,
    addressRegion: BUSINESS.city,
    postalCode: '15024',
    addressCountry: BUSINESS.country,
  },
  areaServed: ['La Molina', 'Santa Patricia', 'Ate', 'Surco', 'Lima'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '21:00',
    },
  ],
  availableService: services.map((s) => ({
    '@type': 'MedicalProcedure',
    name: s.name,
    url: `${SITE_URL}/${s.slug}`,
  })),
};
