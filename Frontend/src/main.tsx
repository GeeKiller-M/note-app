import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Aquí defines que la ruta raíz "/" cargue tu HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Aquí podrías añadir más adelante:
        <Route path="/login" element={<LoginPage />} /> 
        */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)