import React from 'react'
import {NavLink} from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>M</span>
            <h2>Mª Carmen <br/>Arias de Haro</h2>
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink to='/inicio'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/formacion'>Formación</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
