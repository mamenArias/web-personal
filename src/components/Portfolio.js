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
              <img src={personajes} alt='P??gina de personajes'></img>
            </div>
            <div>
              <img src={eventos} alt='P??gina de eventos'></img>
            </div>
            <div>
              <img src={edificios} alt='P??gina de edificios'></img>
            </div>
          </Carousel>
          <div className='text'>
            <h3><a href='https://mamenarias.github.io/Proyecto-1DAM-Web/' target='_blank' rel='noreferrer'>{'>'} Web Animal Crossing</a></h3>
            <p>Se trata de una web realizada desde 0, sin ning??n Framework para la asignatura 'Lenguaje de Marcas' de 1??DAM.</p>
            <p>La tem??tica era libre, por lo que en mi caso decid?? hacerla de este videojuego, 'Animal Crossing', ya que me acompa???? durante
              toda la pandemia y es un juego que me gusta bastante, sobre todo cuando te apece un momento de relax.
            </p>
            <p>La p??gina est?? realizada con <strong className='text-strong'>HTML</strong>, <strong className='text-strong'>CSS</strong> y algo de <strong className='text-strong'>JavaScript</strong>.</p>
          </div>
        </article>

        <hr/>

        <article className='proyect-item'>
          <Carousel className='carousel-large' autoPlay interval={5000} infiniteLoop showThumbs={false}>
            <div>
              <img src={remember1} alt='Men?? del juego'></img>
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
              que hice con dos compa??eros m??s para la <strong className='text-strong'>M??laga Jam</strong>, un evento que se realiza
              dos veces por a??o y que consiste en realizar un juego en 48h.</p>
            <p>Era la primera vez que hac??amos algo as??, por lo que el juego s??lo consist??a en evitar enemigos y avanzar por las diferentes pantallas
              hasta llegar al final.
            </p>
            <p>Nosotros s??lo nos encargamos del c??digo. Los fondos, los personajes y la m??sica son de la plataforma itch.io.</p>
          </div>
        </article>

        <hr/>

        <article className='proyect-item'>
          <Carousel className='carousel-small' autoPlay interval={5000} infiniteLoop showThumbs={false}>
            <div className='image-car'>
              <img src={iniciohit} alt='Inicio de la Aplicaci??n'></img>
            </div>
            <div className='image-car'>
              <img src={menu} alt='Men?? de navegaci??n'></img>
            </div>
            <div className='image-car'>
              <img src={listas} alt='Listas de la compra'></img>
            </div>
            <div className='image-car'>
              <img src={alimentos} alt='B??squeda de alimentos'></img>
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
            <p>Para la asignatura de 'Programaci??n Multimedia y Dispositivos M??viles' de 2?? DAM, realic?? una aplicaci??n m??vil con otros compa??eros.
              La desarrollamos con <strong className='text-strong'>Android Studio</strong> y con el lenguaje <strong className='text-strong'>Kotlin</strong>.
              Adem??s, trabajamos para este proyecto con <strong className='text-strong'>Firebase</strong>, y con <strong className='text-strong'>GitHub</strong> como control de versiones.</p>
            <p>Con esta aplicaci??n podemos crear una lista de la compra y compartirla con otros usuarios, pudiendo tener varias listas compartidas a la vez.
              Adem??s, cuenta con web-scrapping del supermercado D??a, para conocer a qu?? precio est??n los productos en dicha web.
            </p>
          </div>
        </article>

        <hr/>

        <article className='proyect-item'>
          <Carousel className='carousel-large' autoPlay interval={5000} infiniteLoop showThumbs={false}>
            <div className='image-car'>
              <img src={menup} alt='Men?? inicial del juego'></img>
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
            <p>Para la asignatura de 'Programaci??n Multimedia y Dispositivos M??viles' de 2?? DAM, tuvimos que realizar un juego con <strong className='text-strong'>Unity</strong> y <strong className='text-strong'>C#</strong>.
            </p>
            <p>Se trata de un juego estilo plataformas, donde el objetivo es conseguir todas las monedas para completar la pantalla y pasar a la siguiente.
            Todos los assets son de itch.io, habiendo realizando yo la programaci??n del juego, el dise??o de niveles y los men??s.
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
            <p>Esta aplicaci??n de <strong className='text-strong'>Android</strong> fue mi proyecto final del CFGS, que realic?? con mi compa??ero <a href='https://miguelangelarcos.com/' target='_blank' rel='noreferrer'>Miguel ??ngel Arcos Reyes</a>.</p>
            <p>Se trata de una app para conocer gente, que funciona a trav??s de <strong className='text-strong'>Google Nearby</strong>, localizando a personas con las que te cruzas que tambi??n tengan la app.
              Tiene un sistema de logros, de medallas para ver si la persona es agradable o no, y un chat individual con quien elijas.</p>
            <p>Para este proyecto hemos trabajado con <strong className='text-strong'>Kotlin</strong>, <strong className='text-strong'>Firebase</strong> y <strong className='text-strong'>GitHub</strong>.</p>
          </div>
        </article>
        
      </section>
    )
}
