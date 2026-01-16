// src/pages/Home.jsx

// 1. Datos de tratamientos con imágenes más estables y rápidas
const treatments = [
  { id: 1, name: 'Limpieza Dental', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Ortodoncia', img: 'https://images.unsplash.com/photo-1513412305263-ce3d2e57041c?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Blanqueamiento', img: 'https://images.unsplash.com/photo-1613915611241-d602330a6c6a?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Implantes', img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Prótesis', img: 'https://images.unsplash.com/photo-1533226459364-e1e35a74e548?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Odontopediatría', img: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=600' },
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
        <h1 style={{ color: 'white', fontSize: '3.5rem', textAlign: 'center' }}>Dental Córdova</h1>
      </section>

      {/* SECCIÓN BIENVENIDA */}
      <section style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0f172a' }}>Cuidamos tu sonrisa</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#475569' }}>
          Somos una empresa integrada por profesionales capacitados en realizar diversos tratamientos en odontología.Donde el objetivo es servirle de la mejor manera
        </p>
      </section>

      {/* SECCIÓN TRATAMIENTOS */}
      <section id="tratamientos" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto 80px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: '#0f172a' }}>
          Nuestros Tratamientos
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px'
        }}>
          {treatments.map(t => (
            <div key={t.id} style={{ 
              overflow: 'hidden', 
              borderRadius: '16px',
              backgroundColor: '#fff',
              border: '1px solid #f1f5f9'
            }}>
              <img 
                src={t.img} 
                alt={t.name} 
                style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=600"; }}
              />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#1e293b', fontWeight: '500' }}>{t.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO Y UBICACIÓN */}
      <section id="contacto" style={{ padding: '80px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.3rem', color: '#0f172a', marginBottom: '40px', textAlign: 'center' }}>
            Visítanos en nuestra sede
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '40px' 
          }}>
            
            <div style={{ textAlign: 'left', padding: '20px' }}>
              <h3 style={{ color: '#0ea5e9', marginBottom: '20px', fontSize: '1.5rem' }}>Contacto Directo</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                📍 <strong>Dirección:</strong> Ca. Piura 104 (3er piso), Urb. Santa Patricia 2da Etapa, La Molina, Lima, Perú.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                ⏰ <strong>Atención:</strong> Lunes a Sábado de 9:00 AM a 8:00 PM
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                📞 <strong>WhatsApp:</strong> +51 938 912 686
              </p>
              
              <a href="https://wa.me/message/OQYK7VSSWFVRN1" target="_blank" rel="noreferrer" style={{
                display: 'inline-block',
                padding: '15px 30px',
                backgroundColor: '#25D366',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                fontWeight: 'bold',
                boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)'
              }}>
                Reservar Cita por WhatsApp
              </a>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
              <iframe 
                title="Mapa Ubicación"
                width="100%" 
                height="350" 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-76.94610983133317%2C-12.068680574744612%2C-76.94256931543352%2C-12.06632517688493&layer=mapnik" 
                style={{ border: 'none' }}
              ></iframe>
              <div style={{ padding: '10px', backgroundColor: 'white', textAlign: 'center' }}>
                <a 
                  href="https://www.openstreetmap.org/?#map=19/-12.067503/-76.944340" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ fontSize: '0.8rem', color: '#0ea5e9', textDecoration: 'none' }}
                >
                  Ver mapa más grande
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;