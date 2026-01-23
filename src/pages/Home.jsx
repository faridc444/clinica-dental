// src/pages/Home.jsx

// Configuración de ruta base (Preparado para AWS S3 en el futuro)
const imgBase = "/"; 

const treatments = [
  { id: 1, name: 'Alineadores dentales', img: `${imgBase}alineadores-dentales.webp` },
  { id: 2, name: 'Prótesis totales', img: `${imgBase}protesis-dentales.webp` },
  { id: 3, name: 'Curaciones estéticas con resina', img: `${imgBase}curaciones-esteticas-con-resina.webp` },
  { id: 4, name: 'Tratamiento con brackets (ortodoncia)', img: `${imgBase}tratamiento-con-brackets.webp` },
  { id: 5, name: 'Blanqueamiento', img: `${imgBase}blanqueamiento.webp` },
];

function Home() {
  return (
    <div>
      {/* SECCIÓN HERO */}
      <section style={{
        width: '100%',
        height: '70vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ color: 'white', fontSize: '3.5rem', textAlign: 'center', fontWeight: '800', textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>
          Dental Córdova
        </h1>
      </section>

      {/* SECCIÓN BIENVENIDA */}
      <section style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0f172a' }}>Cuidamos tu sonrisa</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#475569' }}>
          Somos un equipo de profesionales especializados en diversos tratamientos odontológicos, 
          comprometidos con brindarte la mejor atención para tu salud bucal y la de tu familia.
        </p>
      </section>

      {/* SECCIÓN TRATAMIENTOS */}
      <section id="tratamientos" style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto 80px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.2rem', color: '#0f172a' }}>
          Nuestros Tratamientos
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {treatments.map(t => (
            <div key={t.id} className="treatment-card" style={{ overflow: 'hidden', borderRadius: '20px', backgroundColor: '#fff', border: '1px solid #f1f5f9', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
              <div style={{ overflow: 'hidden', height: '280px' }}>
                <img src={t.img} alt={t.name} className="treatment-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }} 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=600"; }}
                />
              </div>
              <div style={{ padding: '25px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#1e293b', fontWeight: '600' }}>{t.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN CONTACTO Y MAPA */}
      <section id="contacto" style={{ padding: '80px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.3rem', color: '#0f172a', marginBottom: '40px', textAlign: 'center' }}>Visítanos en nuestra sede</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
            <div style={{ flex: '1 1 320px', textAlign: 'left', padding: '20px' }}>
              <h3 style={{ color: '#0ea5e9', marginBottom: '20px', fontSize: '1.5rem' }}>Contacto Directo</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>📍 <strong>Dirección:</strong> Ca. Piura 104 (3er piso), Urb. Santa Patricia, La Molina.</p>
              <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>⏰ <strong>Atención:</strong> Lunes a Sábado de 9:00 AM a 9:00 PM</p>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>📞 <strong>WhatsApp:</strong> +51 938 912 686</p>
              <a href="https://wa.me/message/OQYK7VSSWFVRN1" target="_blank" rel="noreferrer" style={{ display: 'inline-block', padding: '15px 30px', backgroundColor: '#25D366', color: 'white', textDecoration: 'none', borderRadius: '12px', fontWeight: 'bold' }}>
                Reservar Cita por WhatsApp
              </a>
            </div>
            {/* MAPA GOOGLE CON ZOOM AJUSTADO */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', width: '400px', height: '300px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.803738410283!2d-76.94434!3d-12.067503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c701cc3a81cb%3A0x67456d69a94f6959!2sDentistas%20C%C3%B3rdova!5e0!3m2!1ses-419!2spe!4v1737602381234!5m2!1ses-419!2spe" 
                width="400" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .treatment-card:hover .treatment-img { transform: scale(1.1); }
        .treatment-card { transition: transform 0.3s ease; }
        .treatment-card:hover { transform: translateY(-5px); }
      `}</style>
    </div>
  );
}

export default Home;