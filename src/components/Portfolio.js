import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import ReactPlayer from 'react-player'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import inicio from '../media/proyectos/web-ac/index.jpg'
import personajes from '../media/proyectos/web-ac/personajes.jpg'
import eventos from '../media/proyectos/web-ac/eventos.jpg'
import edificios from '../media/proyectos/web-ac/edificios.jpg'
import iniciohit from '../media/proyectos/hit-the-cooks/inicio.jpeg'
import listas from '../media/proyectos/hit-the-cooks/listas.jpeg'
import menu from '../media/proyectos/hit-the-cooks/menu.jpeg'
import alimentos from '../media/proyectos/hit-the-cooks/alimentos.jpeg'
import alimentos2 from '../media/proyectos/hit-the-cooks/alimentos2.jpeg'
import nosotros from '../media/proyectos/hit-the-cooks/nosotros.jpeg'

export const Portfolio = () => {
    return (
      <section className='portfolio'>
        <h2>- PROYECTOS -</h2>
        <article className='proyect-item'>
          <Carousel className='carousel-large' autoPlay interval={5000} infiniteLoop showThumbs={false}>
            <div>
              <img src={inicio} alt='Inicio Web Animal Crossing'></img>
            </div>
            <div>
              <img src={personajes} alt='Página de personajes'></img>
            </div>
            <div>
              <img src={eventos} alt='Página de eventos'></img>
            </div>
            <div>
              <img src={edificios} alt='Página de edificios'></img>
            </div>
          </Carousel>
          <div className='text'>
            <h3><a href='https://mamenarias.github.io/Proyecto-1DAM-Web/' target='_blank' rel='noreferrer'>{'>'} Web Animal Crossing</a></h3>
            <p>Se trata de una web realizada desde 0, sin ningún Framework para la asignatura 'Lenguaje de Marcas' de 1ºDAM.</p>
            <p>La temática era libre, por lo que en mi caso decidí hacerla de este videojuego, 'Animal Crossing', ya que me acompañó durante
              toda la pandemia y es un juego que me gusta bastante, sobre todo cuando te apece un momento de relax.
            </p>
            <p>La página está realizada con <strong className='text-strong'>HTML</strong>, <strong className='text-strong'>CSS</strong> y algo de <strong className='text-strong'>JavaScript</strong>.</p>
          </div>
        </article>

        <article className='proyect-item'>
          <Carousel className='carousel-large' autoPlay interval={5000} infiniteLoop showThumbs={false}>
            <div>
              <img src={inicio} alt='Inicio Web Animal Crossing'></img>
            </div>
            <div>
              <img src={personajes} alt='Página de personajes'></img>
            </div>
            <div>
              <img src={eventos} alt='Página de eventos'></img>
            </div>
            <div>
              <img src={edificios} alt='Página de edificios'></img>
            </div>
          </Carousel>
          <div className='text'>
            <h3>{'>'} 404</h3>
            <p>Como proyecto final de la asignatura 'Programación' de 1ºDAM, tuvimos que realizar un programa con <strong className='text-strong'>Java Swing</strong>.</p>
            <p>La temática también era libre en este proyecto, y en este caso quise realizar un juego estilo 'scape room', en el que tienes que buscar la llave
              entre los elementos de la habitación para abrir la puerta y pasar a la siguiente pantalla, pudiendo encontrarte con enemigos también.
            </p>
          </div>
        </article>

        <article className='proyect-item'>
          <ReactPlayer className='carousel-large' url='https://www.youtube.com/watch?v=Tk7HJgGEZAY' loop={true} muted={true}/>
          <div className='text'>
            <h3>{'>'} Remember</h3>
            <p>Se trata de un juego realizado con <strong className='text-strong'>Unity</strong> y <strong className='text-strong'>C# </strong>
              que realicé con dos compañeros más para la <strong className='text-strong'>Málaga Jam</strong>, un evento que se realiza
              unas dos veces por año y que consiste en realizar un juego en 48h.</p>
            <p>Era la primera vez que hacíamos algo así, por lo que el juego sólo consistía en evitar enemigos y avanzar por las diferentes pantallas
              hasta llegar al final. Era un juego de plataformas 100%.
            </p>
            <p>Nosotros sólo nos encargamos del código. Los fondos, los personajes y la música son de la plataforma itch.io.</p>
          </div>
        </article>

        <article className='proyect-item'>
          <Carousel className='carousel-small' autoPlay interval={5000} infiniteLoop showThumbs={false}>
            <div className='image-car'>
              <img src={iniciohit} alt='Inicio de la Aplicación'></img>
            </div>
            <div className='image-car'>
              <img src={menu} alt='Menú de navegación'></img>
            </div>
            <div className='image-car'>
              <img src={listas} alt='Listas de la compra'></img>
            </div>
            <div className='image-car'>
              <img src={alimentos} alt='Búsqueda de alimentos'></img>
            </div>
            <div className='image-car'>
              <img src={alimentos2} alt='Alimentos de la lista'></img>
            </div>
            <div className='image-car'>
              <img src={nosotros} alt='Sobre los creadores de la App'></img>
            </div>
          </Carousel>
          <div className='text'>
            <h3>{'>'} Hit The Cooks</h3>
            <p>Para la asignatura de 'Programación Multimedia y Dispositivos Móviles' de 2º DAM, realicé una aplicación móvil con otros compañeros.
              La desarrollamos con <strong className='text-strong'>Android Studio</strong> y con el lenguaje <strong className='text-strong'>Kotlin</strong>.
              Además, trabajamos para este proyecto con <strong className='text-strong'>Firebase</strong>, y con <strong className='text-strong'>GitHub</strong> como control de versiones.</p>
            <p>Con esta aplicación podemos crear una lista de la compra y compartirla con otros usuarios, pudiendo tener varias listas compartidas a la vez.
              Además, cuenta con web-scrapping del supermercado Día, para conocer a qué precio están los productos en dicha web.
            </p>
          </div>
        </article>
        
      </section>
    )
}
