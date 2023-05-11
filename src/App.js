import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, {useEffect, useState} from 'react';

import AppBar from './components/AppBar';
import Contacto from './components/Contacto';
import DetalleVehiculoContainer from './components/vehiculos/DetalleVehiculoContainer';
import Financiacion from './components/Financiacion';
import Footer2 from './components/Footer2';
import Inicio from './components/Inicio';
import Vehiculos from './components/vehiculos/Vehiculos';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/financiacion' element={<Financiacion />} />
        <Route path='/vehiculos' element={<Vehiculos />} />
        <Route path='/vehiculos/iveco-cursor' element={<DetalleVehiculoContainer />}/>
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
