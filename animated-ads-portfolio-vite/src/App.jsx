import Banner1Sales from '../src/bannerSales/Banner1Sales.jsx'
import Banner5Sales from '../src/bannerSales/Banner5Sales.jsx'
import Banner3Sales from '../src/bannerSales/Banner3Sales.jsx'

import Banner1Podcast from '../src/bannerPodcast/Banner1Podcast.jsx'
import Banner3Podcast from '../src/bannerPodcast/Banner3Podcast.jsx'
import Banner5Podcast from '../src/bannerPodcast/Banner5Podcast.jsx'

import Banner1Lafat from '../src/bannerLafat/Banner1Lafat.jsx'
import Banner3Lafat from '../src/bannerLafat/Banner3Lafat.jsx'
import Banner5Lafat from '../src/bannerLafat/Banner5Lafat.jsx'


import Banner1Coilabs from '../src/bannerCoilabs/Banner1Coilabs.jsx'



function App() {

  return (
    <>
      <section id="page1">
        <h1>RAM FIORENTINO</h1>
        <h3>Web Developer & Designer</h3>
        <h2>HTML 5 +  CSS <br />
          Animated ads Portfolio</h2>
        <svg id="arrowsvg" width="52" height="58" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5251 56.4749C24.892 57.8417 27.108 57.8417 28.4749 56.4749L50.7487 34.201C52.1156 32.8342 52.1156 30.6181 50.7487 29.2513C49.3819 27.8844 47.1658 27.8844 45.799 29.2513L26 49.0503L6.20101 29.2513C4.83418 27.8844 2.6181 27.8844 1.25126 29.2513C-0.115572 30.6181 -0.115572 32.8342 1.25126 34.201L23.5251 56.4749ZM22.5 0L22.5 54H29.5L29.5 0L22.5 0Z" fill="black" />
        </svg>
      </section>

      <section id='page2'>
        <img className="profile-pic" src="../src/assets/presentation-assets/faceshot-edit.png" alt="profile picture"/>
        <h1>Hola! Soy <br />
          <b>Ram Fiorentino</b>
        </h1>
        <h2>Web Developer</h2>
        <p>Desarrollador web frontend y artista digital curioso y proactivo, en constante búsqueda de conocimiento y aprendizaje de nuevas tecnologías.  Me apasiona la innovación y tengo especial interés en la animación web, visualización de datos, creative coding, realidad virtual y el diseño.</p>
        <p>A continuación puedes ver una selección de mis producciones de web banners y ads animados con html5 y css3.</p>
        <h3>Herramientas utilizadas</h3>
        <div id='techicons'>
          <img src="../src/assets/presentation-assets/icon-4html.png" alt="icon-html" />
          <img src="../src/assets/presentation-assets/icon-3css.png" alt="icon-html" />
          <img src="../src/assets/presentation-assets/icon-5figma.png" alt="icon-html" />
          <img src="../src/assets/presentation-assets/icon-2ps.png" alt="icon-html" />
          <img src="../src/assets/presentation-assets/icon-1ai.png" alt="icon-html" />
        </div>
      </section>

      <section id='page3'>
        <h2 id='contacto-title'>Contacto</h2>
        <p>
          <i className="fa-solid fa-envelope"></i>&nbsp;ramfiorentino@proton.me <br />
          <i className="fa-brands fa-linkedin"></i>&nbsp;linkedin.com/in/ramfiorentino <br />
          <i className="fa-solid fa-location-dot"></i>&nbsp;Barcelona, Spain</p>
        <h2 id='habilidades-title'>Habilidades</h2>
        <p>
          • Desarrollo Frontend con React.js <br />
          • Diseño web y prototipado con Figma <br />
          • Animación web 2D con HTML5 y CSS3 <br />
          • Identidad corporativa <br />
          • Investigación, personas, userflow
        </p>
      </section>

      <section id='page4-coilabs' className='bannerpage'>
        <h2 className="project-title">Coilabs banner <br />
          ../freelance_2024</h2>
        <div className="project-credits">
          <p>• Identidad de marca <br />
            • Diseño gráfico <br />
            • Producción de logo vectorizado <br />
            • Diagramación en figma <br />
            • Animación en html5 y css3</p>
        </div>
        <div id='coilabs-banner-main-container' className="banner-main-container">
          <div className="banner1"> <Banner1Coilabs /> </div>
          <div className="banner-container-columns">
            <div className="banner-container-column1">
              <div className="banner3">  </div>
            </div>
            <div className="banner-container-column2">
              <div className="banner5">  </div>
              <div className="mobile-mockup"></div>
            </div>
          </div>
        </div>
      </section>

      <section id='page5-lafat' className='bannerpage'>
        <h2 className="project-title">Lafat Bordieu banner <br />
          ../freelance_2023</h2>
        <div className="project-credits">
          <p>• Adaptación a multiples formatos <br />
            • Animación de archivos .png y .gif con html5 + css3 <br /></p>
        </div>
        <div id='coilabs-banner-main-container' className="banner-main-container">
          <div className="banner1"> <Banner1Lafat /> </div>
          <div className="banner-container-columns">
            <div className="banner-container-column1">
              <div className="banner3"> <Banner3Lafat /> </div>
            </div>
            <div className="banner-container-column2">
              <div className="banner5"> <Banner5Lafat /> </div>
              <div className="mobile-mockup"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section id='page6-sales' className='bannerpage'>
        <h2 className="project-title">Sales Ads Banner <br />
        ../personal project_2023</h2>
        <div className="project-credits">
          <p>• Diseño gráfico y adaptación de banner en multiples formatos <br />
            • Diagramación en figma <br />
            • Animación en html5 y css3 <br />
            </p>
        </div>
        <div id='coilabs-banner-main-container' className="banner-main-container">
          <div className="banner1"> <Banner1Sales /> </div>
          <div className="banner-container-columns">
            <div className="banner-container-column1">
              <div className="banner3"> <Banner3Sales /> </div>
            </div>
            <div className="banner-container-column2">
              <div className="banner5"> <Banner5Sales /> </div>
              <div className="mobile-mockup"></div>
            </div>
          </div>
        </div>
      </section>

      <section id='page7-podcast' className='bannerpage'>
        <h2 className="project-title">New Podcast Release Banner<br />
        ../personal project_2023</h2>
        <div className="project-credits">
          <p>• Diseño gráfico y adaptación de banner en multiples formatos <br />
            • Diagramación en figma <br />
            • Animación en html5 y css3<br />
            </p>
        </div>
        <div id='coilabs-banner-main-container' className="banner-main-container">
          <div className="banner1"> <Banner1Podcast /> </div>
          <div className="banner-container-columns">
            <div className="banner-container-column1">
              <div className="banner3"> <Banner3Podcast /> </div>
            </div>
            <div className="banner-container-column2">
              <div className="banner5"> <Banner5Podcast /> </div>
              <div className="mobile-mockup"></div>
            </div>
          </div>
        </div>
      </section>

      

      

    </>
  )
}

export default App



