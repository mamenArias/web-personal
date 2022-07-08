import React, { useState } from 'react'
import linkedin from '../media/linkedin.png'
import github from '../media/github.png'
import trailhead from '../media/trailhead.png'
import { useSpring, animated } from 'react-spring'
import emailjs from 'emailjs-com'

export const Contacto = () => {

  const [send, setSend] = useState(false);
  const [notSend, setNotSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ii6y1ag', 'template_m1t0e1o', e.target, 'Oe7F0bgP9hxvmaflV')
      .then((result) =>{
        console.log(result.text);
        setSend(true);
      }, (error) => {
        console.log(error.text);
        setNotSend(true);
      });
  }

  //Animación para que el formulario aparezca desde arriba
  const fallText = useSpring({
    to: {margin: 10},
    from: {margin: -150}
  })

  return (
    <div className='contact'>
      <animated.h2 className='contact-text' style={fallText}>¡Contacta conmigo!</animated.h2>

      <form className='contact-form' onSubmit={sendEmail}>
        <input type='text' placeholder='Nombre y apellidos' name='name' required='true'/>
        <input type='email' placeholder='Email' name='email' required='true'/>
        <textarea placeholder='Deja aquí tu mensaje...' name='message'/>
        <p className={send ? 'message-active' : 'message-hidden'}>Mensaje enviado correctamente</p>
        <p className={notSend ? 'message2-active' : 'message2-hidden'}>Ha habido un error al enviar el mensaje.Inténtelo más tarde, por favor</p>
        <input type='submit' value='ENVIAR' />
      </form>
      

      <div className='social-networks'>
          <a href='https://www.linkedin.com/in/mcariasdeharo/' target='_blank' rel='noreferrer'><img className='social-icons' src={linkedin} alt='LinkedIn'></img></a>
          <a href='https://github.com/mamenArias' target='_blank' rel='noreferrer'><img className='social-icons' src={github} alt='GitHub'></img></a>
          <a href='https://trailblazer.me/id/mcariasdeharo' target='_blank' rel='noreferrer'><img className='social-icons' src={trailhead} alt='Trailblazer'></img></a>
      </div>
    </div>
  )
}
