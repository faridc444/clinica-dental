// src/components/Layout.jsx
import { MessageCircle, Clock, Phone, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinkStyle = {
  color: "#1e293b", 
  marginLeft: "1.5rem",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: "500",
  transition: "color 0.3s ease",
};

function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* 1. BARRA SUPERIOR INFORMATIVA (Top Bar) */}
      <div style={{ 
        background: '#f8fafc', 
        padding: '0.5rem 2rem', 
        borderBottom: '1px solid #e2e8f0', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        fontSize: '0.85rem', 
        color: '#64748b' 
      }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Clock size={14} color="#0ea5e9" /> Lun - Sáb: 9:00 AM - 9:00 PM
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Phone size={14} color="#0ea5e9" /> +51 938 912 686
          </span>
        </div>
        <div style={{ display: 'none', md: 'block' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={14} color="#0ea5e9" /> La Molina, Lima
          </span>
        </div>
      </div>

      {/* 2. HEADER PRINCIPAL (Minimalista) */}
      <header style={{ 
        background: "white", 
        padding: "0.8rem 2rem", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        position: 'sticky', 
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0369a1' }}>
          Dental <span style={{ color: '#0ea5e9' }}>Córdova</span>
        </h2>
        
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={navLinkStyle}>Inicio</Link>
          <a href="/#tratamientos" style={navLinkStyle}>Tratamientos</a> {/* Mantenemos el ancla para scroll */}
          
          <Link 
            to="/reservar" 
            style={{
              marginLeft: '2rem',
              padding: '10px 20px',
              backgroundColor: '#0ea5e9',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Calendar size={16} /> Solicitar una consulta
          </Link>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* BOTÓN FLOTANTE DE WHATSAPP (Se mantiene igual pero con zIndex alto) */}
      <a
        href="https://wa.me/message/OQYK7VSSWFVRN1" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: '20px', right: '20px',
          backgroundColor: '#25D366', color: 'white',
          width: '65px', height: '65px', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)', zIndex: 2000,
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={35} fill="white" color="#25D366" /> 
      </a>

      <footer style={{ padding: "2rem", textAlign: "center", fontSize: '0.9rem', color: '#64748b', borderTop: '1px solid #f1f5f9' }}>
        © 2026 Clínica Dental Córdova
      </footer>
    </div>
  );
}

export default Layout;