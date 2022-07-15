import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './logo-personal.png'
import logoAncho from './logo-ancho.png'

export const HeaderNav = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className='header'>
        
        <nav className='navigation'>
        <img className='logo-pequeño' src={logo} alt='Logo personal'></img>
        <img className='logo-ancho' src={logoAncho} alt='Logo personal'></img>
            <button className='hamburger' onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                <FontAwesomeIcon className='icon' icon={isNavExpanded ? 'fa-times' : 'fa-bars'} />
            </button>

            <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
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
            </div>
        </nav>

    </header>
  )
}
