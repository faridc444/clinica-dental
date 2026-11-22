// src/App.jsx
// El Router se pone afuera: BrowserRouter en el navegador (main.jsx)
// y StaticRouter al generar el HTML estático (entry-server.jsx).
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import AppointmentForm from './components/AppointmentForm';
import { services } from './data/services.js';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {services.map((s) => (
          <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage service={s} />} />
        ))}
        <Route
          path="/reservar"
          element={
            <div style={{ padding: '40px 20px' }}>
              <AppointmentForm />
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
