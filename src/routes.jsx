import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import App2 from './app2.jsx';
import Alarmes from './Alarmes.jsx';
import Cronometro from './cronometro.jsx'
import Relaxa from './Relaxa.jsx';

export function AppRoutes() {
  return (
    <BrowserRouter basename='/Acorda-acorda'>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/Alarmes" element={<Alarmes />} />

        <Route path="/home" element={<App2 />} />

        <Route path='/cronometros' element={<Cronometro/>} />

        <Route path='/Relaxa' element={<Relaxa/>} />


      </Routes>
    </BrowserRouter>
  );
}