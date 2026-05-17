import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import App2 from './app2.jsx';
import Alarmes from './Alarmes.jsx';

export function AppRoutes() {
  return (
    <BrowserRouter basename='/Acorda-acorda'>
      <Routes>

        <Route path="/" element={<App />} />
        
        <Route path="/home" element={<App2 />} />

        <Route path="/Alarmes" element={<Alarmes />} />

        <Route path="/home" element={<App2 />} />


      </Routes>
    </BrowserRouter>
  );
}