import React, { useState, useMemo } from 'react';
import { Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppointmentForm = () => {
  // 1. Estado inicial sin DNI
  const [formData, setFormData] = useState({
    nombre: '', telefono: '', email: '', fecha: '', hora: '09:00', observaciones: ''
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const restrictedTerms = useMemo(() => {
    const terms = import.meta.env.VITE_RESTRICTED_TERMS;
    return terms ? terms.split(',') : [];
  }, []);

  const getMinDate = () => new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const validateForm = () => {
    let newErrors = {};
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // Validación de teléfono (mínimo 9 dígitos)
    if (!/^\d{9,}$/.test(formData.telefono)) newErrors.telefono = "Mínimo 9 números.";

    if (!formData.fecha) {
      newErrors.fecha = "Seleccione una fecha.";
    } else {
      const fechaSel = new Date(formData.fecha + "T00:00:00");
      const diaSemana = fechaSel.getUTCDay();
      if (fechaSel < hoy) newErrors.fecha = "No elija fechas pasadas.";
      if (diaSemana === 0) newErrors.fecha = "No atendemos domingos.";
    }

    const contenido = (formData.nombre + " " + (formData.observaciones || "")).toLowerCase();
    if (restrictedTerms.some(term => contenido.includes(term))) {
      newErrors.observaciones = "Contenido no permitido.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) return setErrors(formErrors);

    setStatus('loading');
    const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData)
      });
      setStatus('success');
    } catch (err) {
      setErrors({ general: "Error de conexión." });
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div style={successContainerStyle}>
        <CheckCircle size={48} color="#22c55e" style={{ margin: '0 auto 15px' }} />
        <h3 style={{ color: '#166534', marginBottom: '10px' }}>¡Solicitud enviada!</h3>
        <p style={{ color: '#166534', marginBottom: '25px' }}>Nos comunicaremos pronto para confirmar su consulta.</p>
        <Link to="/" style={successBtnStyle}><ArrowLeft size={18} /> Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div id="reservar" style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '30px' }}>Solicitar Consulta</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Campo Nombre completo */}
        <input type="text" name="nombre" placeholder="Nombre y Apellido" required value={formData.nombre} onChange={handleChange} style={inputStyle} />
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} style={errors.telefono ? inputErrorStyle : inputStyle} />
            {errors.telefono && <span style={errorTextStyle}>{errors.telefono}</span>}
          </div>
          <input type="email" name="email" placeholder="Correo electrónico" required value={formData.email} onChange={handleChange} style={{ ...inputStyle, flex: 1 }} />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Fecha deseada</label>
            <input type="date" name="fecha" min={getMinDate()} value={formData.fecha} onChange={handleChange} style={errors.fecha ? inputErrorStyle : inputStyle} />
            {errors.fecha && <span style={errorTextStyle}>{errors.fecha}</span>}
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Hora aprox.</label>
            <select name="hora" value={formData.hora} onChange={handleChange} style={inputStyle}>
              {["09:00", "10:00", "11:00", "12:00", "13:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" disabled={status === 'loading'} style={buttonStyle}>
          {status === 'loading' ? 'Enviando...' : <><Send size={18} /> Solicitar Consulta</>}
        </button>
      </form>
    </div>
  );
};

const containerStyle = { padding: '40px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', maxWidth: '600px', margin: '0 auto' };
const successContainerStyle = { textAlign: 'center', padding: '40px', backgroundColor: '#f0fdf4', borderRadius: '15px', border: '1px solid #bbf7d0', maxWidth: '600px', margin: '0 auto' };
const inputStyle = { padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', width: '100%', outline: 'none' };
const inputErrorStyle = { ...inputStyle, border: '1px solid #dc2626', backgroundColor: '#fef2f2' };
const errorTextStyle = { color: '#dc2626', fontSize: '0.75rem', marginTop: '4px', display: 'block' };
const labelStyle = { display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#64748b', fontWeight: '600' };
const buttonStyle = { backgroundColor: '#0ea5e9', color: 'white', padding: '15px', borderRadius: '10px', border: 'none', fontWeight: '700', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' };
const successBtnStyle = { display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#22c55e', color: 'white', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600' };

export default AppointmentForm;