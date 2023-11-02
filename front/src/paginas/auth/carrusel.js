import React from 'react' ;
import { Link } from 'react-router-dom' ;

const Carrusel = ()=>{
  return (
   <div>
  <title>Carousel/Slideshow</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="/front/css/carrusel.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  <div className="container">
    <br />
    <div id="theCarousel" className="carousel slide" data-ride="carousel">
      {/* Indicadores */}
      <ol className="carousel-indicators">
        <li data-target="#theCarousel" data-slide-to={0} className="active" />
        <li data-target="#theCarousel" data-slide-to={1} />
        <li data-target="#theCarousel" data-slide-to={2} />
        <li data-target="#theCarousel" data-slide-to={3} />    
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="/front/src/utiles/perrito1.jpg" alt="Ilustracion" /> 
          <div className="carousel-caption d-none d-md-block">
            <h3>Gusti Ilustración</h3>
            <p>Exposición</p>
          </div>
        </div>  
        <div className="item">
          <img src="https://ugc.kn3.net/i/origin/http://thisiscolossal.com/wp-content/uploads/2011/02/anthony-2-600x424.jpg" alt="fotografia" width={600} height={424} /> 
          <div className="carousel-caption d-none d-md-block">
            <h3> Xataka Fotografía</h3>
            <p>Concurso</p>
          </div>
        </div>
        <div className="item">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e86e8b59124321.5a15e4ccd8622.jpg" alt="pintura" width={600} height={424} />
          <div className="carousel-caption d-none d-md-block">
            <h3>DoArt Pintura</h3>
            <p>Curso</p>
          </div>
        </div>
        <div className="item">
          <img src="https://cdn.dribbble.com/users/324248/screenshots/3978513/planet2_800.jpg" alt="diseno" width={600} height={424} /> 
          <div className="carousel-caption d-none d-md-block">
            <h3>UX UI Diseño Gráfico</h3>
            <p>Curso</p>
          </div>
        </div>
        <a className="left carousel-control" href="#theCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
          <span className="sr-only">anterior</span>
        </a>
        <a className="right carousel-control" href="#theCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
          <span className="sr-only">siguiente</span>
        </a>
      </div>
    </div>
  </div></div>

)
   
}
  export default Carrusel;