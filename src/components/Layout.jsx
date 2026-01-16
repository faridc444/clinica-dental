const navLinkStyle = {
  color: "white",
  marginLeft: "1.5rem",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: "500",
};

function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <header style={{ 
        background: "#0ea5e9", 
        padding: "1rem 2rem", 
        color: "white", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        position: 'sticky', 
        top: 0,
        zIndex: 1000
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Dental Córdova</h2>
        <nav>
          <a href="#" style={navLinkStyle}>Inicio</a>
          <a href="#tratamientos" style={navLinkStyle}>Tratamientos</a>
          <a href="#contacto" style={navLinkStyle}>Contáctanos</a>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a
        href="https://wa.me/51999888777?text=Hola%20OdontoCórdova,%20deseo%20agendar%20una%20cita" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 2000,
          textDecoration: 'none'
        }}
      >
        <span>📞</span> 
      </a>

      <footer style={{ padding: "2rem", textAlign: "center", fontSize: '0.9rem', color: '#64748b', borderTop: '1px solid #f1f5f9' }}>
        © 2026 Clínica Dental Córdova
      </footer>
    </div>
  );
}

export default Layout;