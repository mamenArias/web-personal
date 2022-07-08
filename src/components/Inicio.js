import React, { useEffect, useState } from 'react'
import photo from '../media/fotoCv.jpg'
import { useSpring, config, animated } from 'react-spring'

export const Inicio = () => {

  const [fade, setFade] = useState (false);

  const {opacity} = useSpring({
    opacity: fade ? '1' : '0',
    config: { config: config.default }
  });

  useEffect( () => {
    setFade(true);
  }, []);

  return (
    <div className='index'>
      <div className='introduction'>
            <animated.p className='personal-text' style={{opacity, transition: '500ms'}}><strong>¡Buenas!</strong><br/><br/>
              Mi nombre es Mª Carmen Arias, aunque me llaman Mamen, y soy  
              <br/><strong className='text-strong'> Técnico Superior de Desarrollo de Aplicaciones Multiplataforma. </strong>
              <br/><br/>Estudié el Grado de Fisioterapia en 2009 y el Máster en Osteopatía en 2013, y he trabajado como fisioterapeuta
              7 años de mi vida. Sin embargo, a raíz de la pandemia y por una serie de circunstancias, decidí darle un giro de 180º a mi vida
              y estudiar algo que siempre me había gustado desde pequeñita: <strong className='text-strong'> Informática. </strong><br/><br/>
              Me apunté al CFGS de <strong className='text-strong'> Desarrollo de Aplicaciones Multiplataforma</strong> y puedo decir que fue la mejor decisión que tomé.
              Quiero trabajar en el mundo del Desarrollo y, por supuesto, no pienso dejar de formarme, ya que creo que hay un mundo enorme por descubrir
              dentro de la programación.
            </animated.p>
        <animated.img className='personal-photo' src={photo} alt='Foto de perfil' style={{opacity, transition: '500ms'}}></animated.img>
      </div>

      <section className='tecnologies'>

      </section>
    </div>
  )
}
