import React from 'react'
import {NavLink} from 'react-router-dom'

export const HeaderNav = () => {

  return (
    <header className='header'>
        <div className='logo'>
            <span className='span-normal'>M</span>
            <h2>Mª Carmen <br/>Arias de Haro</h2>
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink to='/inicio' className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/formacion' className={({isActive}) => isActive ? 'active' : ''}>Formación</NavLink>
                </li>
                <li>
                    <NavLink to='/experiencia' className={({isActive}) => isActive ? 'active' : ''}>Experiencia</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' className={({isActive}) => isActive ? 'active' : ''}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto' className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
