import React from 'react'
import cenec from '../media/cenec.png'
import uma from '../media/uma.png'
import master from '../media/master.png'
import domestika from '../media/domestika.png'
import udemy from '../media/udemy.png'
import cloud from '../media/cloudcouchers.png'
import {StyleSheet, css} from 'aphrodite'
import { slideInLeft, slideInRight } from 'react-animations'

export const Formacion = () => {

  const styles = StyleSheet.create({
    slideInLeft: {
      animationName: [slideInLeft],
      animationDuration: '1s'
    },
    widthMargin: {
      width: '200px',
      margin: '15px'
    },
    slideInRight: {
      animationName: [slideInRight],
      animationDuration: '1s'
    }
  })


  return (
    <div className='training'>
      <h2>- Formación -</h2>
      <section className='studies'>
        <article className='centers'>
          <img className={css(styles.slideInLeft, styles.widthMargin)} src={cenec} alt='Logo CENEC'></img>
          <p className='studies-info'><strong>CFGS Desarrollo de Aplicaciones Multiplataforma</strong> (2020-2022)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Media: 10</p>
        </article>
        <article className='centers'>
        <img className={css(styles.slideInLeft, styles.widthMargin)} src={master} alt='Logo UPS' style={styles.bounce}></img>
          <p className='studies-info'><strong>Máster en Osteopatía</strong> (2013-2015)</p>
        </article>
        <article className='centers'>
        <img className={css(styles.slideInLeft, styles.widthMargin)} src={uma} alt='Logo UMA' style={styles.bounce}></img>
          <p className='studies-info'><strong>Grado en Fisioterapia</strong> (2009-2013) <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Media: 8.92</p>
        </article>
      </section>

      <h2 className='h2-bottom'>- Cursos -</h2>
      <section className='courses'>
        <article className='platform'>
          <p className='courses-info'><strong>- Máster en React, por Victor Robles WEB</strong> (2022)</p>
          <img className={css(styles.slideInRight, styles.widthMargin)} src={udemy} alt='Logo CENEC'></img>
        </article>
        <article className='platform'>
          <p className='courses-info'><strong>- Salesforce Basic Administrator</strong> (2022) <br/>
            <strong>- Salesforce Developer I</strong> (2022)</p>
          <img className={css(styles.slideInRight, styles.widthMargin)} src={cloud} alt='Logo UPS'></img>
        </article>
        <article className='platform'>
          <p className='courses-info'><strong>- Introducción a Unity para videojuegos 2D</strong> (2022) </p>
          <img className={css(styles.slideInRight, styles.widthMargin)} src={domestika} alt='Logo UMA'></img>
        </article>
      </section>
    </div>
  )
}
