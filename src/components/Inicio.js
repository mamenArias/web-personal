import React from 'react'
import photo from '../media/fotoCv.jpg'

export const Inicio = () => {
  return (
    <div className='index'>
      <div className='introduction'>
        <p className='personal-text'><strong>¡Buenas!</strong><br/><br/>
          Mi nombre es Mª Carmen Arias, aunque se me conoce más por Mamen, y soy  
          <strong> Técnico superior de Desarrollo de Aplicaciones Multiplataforma. </strong>
          <br/><br/>Estudié el Grado de Fisioterapia en 2009 y el Máster en Osteopatía en 2013, y he trabajado como fisioterapeuta
          7 años de mi vida. Sin embargo, a raíz de la pandemia y por una serie de circunstancias, decidí darle un giro de 180º a mi vida
          y estudiar algo que siempre me había gustado desde pequeñita: <strong> Informática. </strong><br/><br/>
          Me apunté al CFGS de <strong> Desarrollo de Aplicaciones Multiplataforma</strong> y puedo decir que fue la mejor decisión que tomé.
          Quiero trabajar en el mundo del Desarrollo y, por supuesto, no pienso dejar de formarme, ya que creo que hay un mundo enorme por descubrir
          dentro de la programación.
          </p>
        <img className='personal-photo' src={photo} alt='Foto de perfil'></img>
      </div>

      <section className='tecnologies'>

      </section>
    </div>
  )
}
