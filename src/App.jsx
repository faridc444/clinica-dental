import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AppointmentForm from "./components/AppointmentForm"; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservar" element={
            <div style={{ padding: '40px 20px' }}>
              <AppointmentForm />
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;