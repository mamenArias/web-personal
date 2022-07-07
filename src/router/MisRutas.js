import React from 'react'
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom'
import { Contacto } from '../components/Contacto';
import { Formacion } from '../components/Formacion';
import { Inicio } from '../components/Inicio';
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Portfolio } from '../components/Portfolio';

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* Navegación */}
            <HeaderNav />

        {/* Contenido principal */}
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/formacion' element={<Formacion/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/contacto' element={<Contacto/>} />
        </Routes>

    </BrowserRouter>
  );
}
