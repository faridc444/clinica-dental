const treatments = [
  { id: 1, name: 'Limpieza Dental', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format' },
  { id: 2, name: 'Ortodoncia', img: 'https://images.unsplash.com/photo-1513412305263-ce3d2e57041c?w=500&auto=format' },
  { id: 3, name: 'Blanqueamiento', img: 'https://images.unsplash.com/photo-1613915611241-d602330a6c6a?w=500&auto=format' },
  { id: 4, name: 'Implantes', img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&auto=format' },
  { id: 5, name: 'Prótesis', img: 'https://images.unsplash.com/photo-1533226459364-e1e35a74e548?w=500&auto=format' },
  { id: 6, name: 'Odontopediatría', img: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=500&auto=format' },
];

function Home() {
  return (
    <div>
      {/* SECCIÓN HERO */}
      <section style={{
        width: '100%',
        height: '70vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ color: 'white', fontSize: '3.5rem', textAlign: 'center' }}>OdontoCórdova</h1>
      </section>

      {/* BIENVENIDA */}
      <section style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0f172a' }}>Cuidamos tu sonrisa</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#475569' }}>
          En nuestra clínica, combinamos tecnología de vanguardia con un trato humano.
        </p>
      </section>

      {/* TRATAMIENTOS */}
      <section id="tratamientos" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto 80px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: '#0f172a' }}>Nuestros Tratamientos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {treatments.map(t => (
            <div key={t.id} style={{ overflow: 'hidden', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <img src={t.img} alt={t.name} style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#1e293b' }}>{t.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO Y UBICACIÓN */}
      <section id="contacto" style={{ padding: '80px 20px', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '40px' }}>Visítanos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'left', padding: '30px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#0ea5e9', marginBottom: '15px' }}>Contacto</h3>
              <p>📍 Ca. Piura, Urb. Santa Patricia, La Molina, Lima, Perú</p>
              <p>⏰ Lun - Sáb: 9:00 AM - 8:00 PM</p>
              <a href="https://wa.me/message/OQYK7VSSWFVRN1" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 25px', backgroundColor: '#0ea5e9', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>
                Agendar Cita
              </a>
            </div>
            <div style={{ height: '250px', backgroundColor: '#e2e8f0', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>Mapa de Google Maps</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;