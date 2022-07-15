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
import menup from '../media/proyectos/plucky/menu.jpg'
import controles from '../media/proyectos/plucky/controles.jpg'
import escenario1 from '../media/proyectos/plucky/inicio.jpg'
import gameover from '../media/proyectos/plucky/gameover.jpg'
import enemigo1 from '../media/proyectos/plucky/enemies1.jpg'
import puerta from '../media/proyectos/plucky/door.jpg'
import escenario2 from '../media/proyectos/plucky/escenario2.jpg'
import enemigo2 from '../media/proyectos/plucky/enemies2.jpg'
import escenario3 from '../media/proyectos/plucky/escenario3.jpg'
import jefe from '../media/proyectos/plucky/jefe.jpg'
import jefecaida from '../media/proyectos/plucky/jefecaida.jpg'
import finjuego from '../media/proyectos/plucky/fin.jpg'
import remember1 from '../media/proyectos/remember/1menu.jpg'
import remember2 from '../media/proyectos/remember/2escenario.jpg'
import remember3 from '../media/proyectos/remember/3escenario.jpg'
import remember4 from '../media/proyectos/remember/4recuerdos.jpg'
import remember5 from '../media/proyectos/remember/5escenario.jpg'
import remember6 from '../media/proyectos/remember/6plataformas.jpg'

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

        <hr/>

        <article className='proyect-item'>
          <Carousel className='carousel-large' autoPlay interval={5000} infiniteLoop showThumbs={false}>
            <div>
              <img src={remember1} alt='Menú del juego'></img>
            </div>
            <div>
              <img src={remember2} alt='Primer escenario'></img>
            </div>
            <div>
              <img src={remember3} alt='Enemigos y cuervos'></img>
            </div>
            <div>
              <img src={remember4} alt='Recuerdos del personaje'></img>
            </div>
            <div>
              <img src={remember5} alt='Segundo escenario'></img>
            </div>
            <div>
              <img src={remember6} alt='Plataformas del tercer escenario'></img>
            </div>
          </Carousel>
          <div className='text'>
            <h3>{'>'} Remember</h3>
            <p>Se trata de un juego de plataformas realizado con <strong className='text-strong'>Unity</strong> y <strong className='text-strong'>C# </strong>
              que hice con dos compañeros más para la <strong className='text-strong'>Málaga Jam</strong>, un evento que se realiza
              dos veces por año y que consiste en realizar un juego en 48h.</p>
            <p>Era la primera vez que hacíamos algo así, por lo que el juego sólo consistía en evitar enemigos y avanzar por las diferentes pantallas
              hasta llegar al final.
            </p>
            <p>Nosotros sólo nos encargamos del código. Los fondos, los personajes y la música son de la plataforma itch.io.</p>
          </div>
        </article>

        <hr/>

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

        <hr/>

        <article className='proyect-item'>
          <Carousel className='carousel-large' autoPlay interval={5000} infiniteLoop showThumbs={false}>
            <div className='image-car'>
              <img src={menup} alt='Menú inicial del juego'></img>
            </div>
            <div className='image-car'>
              <img src={controles} alt='Controles'></img>
            </div>
            <div className='image-car'>
              <img src={escenario1} alt='Prinmer escenario'></img>
            </div>
            <div className='image-car'>
              <img src={enemigo1} alt='Un tipo de enemigo'></img>
            </div>
            <div className='image-car'>
              <img src={gameover} alt='Pantalla Game Over'></img>
            </div>
            <div className='image-car'>
              <img src={puerta} alt='Final Pantalla'></img>
            </div>
            <div className='image-car'>
              <img src={enemigo2} alt='Tipo de enemigo'></img>
            </div>
            <div className='image-car'>
              <img src={escenario2} alt='Segundo escenario'></img>
            </div>
            <div className='image-car'>
              <img src={escenario3} alt='Tercer escenario'></img>
            </div>
            <div className='image-car'>
              <img src={jefe} alt='Jefe final'></img>
            </div>
            <div className='image-car'>
              <img src={jefecaida} alt='Jefe final derrotado'></img>
            </div>
            <div className='image-car'>
              <img src={finjuego} alt='Pantalla fin del juego'></img>
            </div>
          </Carousel>
          <div className='text'>
            <h3>{'>'} Plucky!</h3>
            <p>Para la asignatura de 'Programación Multimedia y Dispositivos Móviles' de 2º DAM, tuvimos que realizar un juego con <strong className='text-strong'>Unity</strong> y <strong className='text-strong'>C#</strong>.
            </p>
            <p>Se trata de un juego estilo plataformas, donde el objetivo es conseguir todas las monedas para completar la pantalla y pasar a la siguiente.
            Todos los assets son de itch.io, habiendo realizando yo la programación del juego, el diseño de niveles y los menús.
            </p>
          </div>
        </article>

        <hr/>

        <article className='proyect-item'>
          <div className='carousel-large'>
            <ReactPlayer width='100%' height='100%' url='https://www.youtube.com/watch?v=VJ-MNQQp0hU' autoPlay={true} loop={true} muted={true}/>
          </div>
          <div className='text'>
            <h3>{'>'} Freeling</h3>
            <p>Esta aplicación de <strong className='text-strong'>Android</strong> fue mi proyecto final del CFGS, que realicé con mi compañero <a href='https://miguelangelarcos.com/' target='_blank' rel='noreferrer'>Miguel Ángel Arcos Reyes</a>.</p>
            <p>Se trata de una app para conocer gente, que funciona a través de <strong className='text-strong'>Google Nearby</strong>, localizando a personas con las que te cruzas que también tengan la app.
              Tiene un sistema de logros, de medallas para ver si la persona es agradable o no, y un chat individual con quien elijas.</p>
            <p>Para este proyecto hemos trabajado con <strong className='text-strong'>Kotlin</strong>, <strong className='text-strong'>Firebase</strong> y <strong className='text-strong'>GitHub</strong>.</p>
          </div>
        </article>
        
      </section>
    )
}
