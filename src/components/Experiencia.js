import React from 'react'
import accenture from '../media/accenture.png'
import fisio from '../media/fisioterapia.png'
import {StyleSheet, css} from 'aphrodite'
import { slideInLeft, fadeIn } from 'react-animations'
import android from '../media/logos/androidstudio.png'
import code from '../media/logos/code.png'
import csslogo from '../media/logos/css.png'
import csharp from '../media/logos/csharp.png'
import eclipse from '../media/logos/eclipse2.png'
import github from '../media/logos/github.png'
import gitlab from '../media/logos/gitlab.png'
import htmllogo from '../media/logos/html.png'
import vstudio from '../media/logos/vstudio.png'
import unity from '../media/logos/unity.png'
import salesforce from '../media/logos/salesforce-logo.png'
import apex from '../media/logos/apex.png'
import oracle from '../media/logos/oracle.png'
import netbeans from '../media/logos/netbeans.png'
import mysql from '../media/logos/mysql.png'
import kotlin from '../media/logos/kotlin2.png'
import javaswing from '../media/logos/javaswingg.png'
import javafx from '../media/logos/javafx.png'
import java from '../media/logos/java.png'

export const Experiencia = () => {

  const styles = StyleSheet.create({
    slideInLeft: {
      animationName: [slideInLeft],
      animationDuration: '1s'
    },
    widthMargin: {
      width: '200px',
      margin: '15px'
    },
    fadeIn: {
      animationName: [fadeIn],
      animationDuration: '1s'
    },
    tecItem: {
      padding: '20px',
      width: '100px',
      height: '100px',
      transition: 'all 300ms'
    },
    tecItemLarge: {
      padding: '20px',
      width: '200px',
      height: '100px',
      transition: 'all 300ms'
    }
  })

  return (
    <div className='experience'>
      <h2>- Experiencia como Desarrolladora -</h2>
      <section className='developer-works'>
        <article className='accenture'>
          <img className={css(styles.slideInLeft, styles.widthMargin)} src={accenture} alt='Logo Accenture'></img>
          <p className='experience-info'><strong>FCT Salesforce Developer</strong> (Abril 2022 - Junio 2022)
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Desarrollo de las prácticas del CFGS DAM:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Talent Campus de formación en Salesforce.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Prácticas en proyecto real de Salesforce (NNSS Endesa).</p>
          </p>
        </article>
      </section>

      <h2 className='h2-bottom'>- TECNOLOGÍAS Y SOFTWARES -</h2>
      <section className='tecnologies'>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItem)} src={java} alt='Java' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItem)}src={htmllogo} alt='HTML5' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItem)} src={csslogo} alt='CSS3' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={mysql} alt='MySQL' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItem)} src={csharp} alt='C#' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItem)} src={kotlin} alt='Kotlin' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={javafx} alt='JavaFX' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={javaswing} alt='Java Swing' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItem)} src={oracle} alt='SQL Oracle' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={code} alt='Visual Studio Code' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={vstudio} alt='Visual Studio' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={eclipse} alt='Eclipse' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={netbeans} alt='Netbeans' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={android} alt='Android Studio' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={gitlab} alt='GitLab' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={github} alt='GitHub' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={salesforce} alt='Salesforce' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItemLarge)} src={apex} alt='Salesforce Apex' />
        </article>
        <article className='tec-item'>
          <img className={css(styles.fadeIn, styles.tecItem)} src={unity} alt='Unity' />
        </article>
      </section>

      <h2 className='h2-bottom'>- OTROS TRABAJOS -</h2>
      <section className='other-works'>
        <article className='physiotherapy'>
          <img className={css(styles.slideInLeft, styles.widthMargin)} src={fisio} alt='Fisioterapia Costa del Sol'></img>
          <p className='experience-info'><strong>Fisioterapeuta</strong> (Octubre 2013 - Octubre 2020)
            <p>&nbsp;&nbsp;&nbsp;&nbsp;- Fisioterapeuta autónoma.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- Tratamiento de pacientes traumatológicos.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- Seguros privados, particulares y accidentes de tráfico.</p>
          </p>
        </article>
      </section>
    </div>
  )
}
