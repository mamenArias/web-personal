import React from 'react'
import cenec from '../media/cenec.png'
import uma from '../media/uma.png'
import master from '../media/master.png'
import domestika from '../media/domestika.png'
import udemy from '../media/udemy.png'
import cloud from '../media/cloudcouchers.png'
import { useSpring, a } from 'react-spring'

export const Formacion = () => {

  const movePhotos = useSpring({
    to: {'margin-left': 0},
    from: {'margin-left': -150}
  })

  return (
    <div className='training'>
      <section className='studies'>
        <h2>Formación</h2>
        <article className='centers'>
          <a.img className='studies-photo' src={cenec} alt='Logo CENEC' style={movePhotos}></a.img>
          <p className='studies-info'><strong>CFGS Desarrollo de Aplicaciones Multiplataforma</strong> (2020-2022)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Media: 10</p>
        </article>
        <article className='centers'>
        <a.img className='studies-photo' src={master} alt='Logo UPS' style={movePhotos}></a.img>
          <p className='studies-info'><strong>Máster en Osteopatía</strong> (2013-2015)</p>
        </article>
        <article className='centers'>
        <a.img className='studies-photo' src={uma} alt='Logo UMA' style={movePhotos}></a.img>
          <p className='studies-info'><strong>Grado en Fisioterapia</strong> (2009-2013) <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Media: 8.92</p>
        </article>
      </section>

      <section className='courses'>
        <h2>Cursos</h2>
        <article className='platform'>
          <p className='courses-info'><strong>- Máster en React, por Victor Robles WEB</strong> (2022)</p>
          <img className='courses-photo' src={udemy} alt='Logo CENEC'></img>
        </article>
        <article className='platform'>
          <p className='courses-info'><strong>- Salesforce Basic Administrator</strong> (2022) <br/>
            <strong>- Salesforce Developer I</strong> (2022)</p>
          <img className='courses-photo' src={cloud} alt='Logo UPS'></img>
        </article>
        <article className='platform'>
          <p className='courses-info'><strong>- Introducción a Unity para videojuegos 2D</strong> (2022) </p>
          <img className='courses-photo' src={domestika} alt='Logo UMA'></img>
        </article>
      </section>
    </div>
  )
}
