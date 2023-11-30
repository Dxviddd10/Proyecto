import imagen1 from "../assets/images/imagenn.jpeg";
import imagen2 from "../assets/images/imgg.png";
import imagen3 from "../assets/images/img6.jpg";
import imagen4 from "../assets/images/perritos.jpg";
const Inicio = () => { 
    return(

<main>
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imagen1} className="d-block w-100" alt="..." controls width="1280" height="720"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>"Uniendo corazones para cambiar destinos. ¡Bienvenido a Patas Solidarias!"</h5>
      
      </div>
    </div>
    <div className="carousel-item">
      <img  src={imagen2} className="d-block w-100" alt="..." controls width="1280" height="720"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-black">"Cada perro callejero tiene una historia que contar. Descubre cómo estamos cambiando sus vidas, una pata a la vez."</h5>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={imagen3} className="d-block w-100" alt="..." controls width="1280" height="720"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>"Desde rescates hasta campañas de esterilización, conoce los proyectos que están construyendo un futuro más esperanzador para nuestros amigos peludos."</h5>
        
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br />
<div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">¿Conoces la problematica de los perritos callejeros? <span class="text-body-secondary"></span></h2>
        <p class="lead">
En América Latina, se estima que hay decenas de millones de perros callejeros, enfrentando problemas de salud, maltrato y abandono. Las causas del abandono incluyen la falta de conciencia sobre la esterilización y la falta de programas efectivos de control de población. La ayuda a estos perros es esencial para mejorar su bienestar, controlar la superpoblación a través de programas de esterilización, prevenir enfermedades mediante atención veterinaria y fomentar la adopción responsable. Además de impactar positivamente en la salud de los perros, estas acciones contribuyen a la promoción de la compasión y la responsabilidad hacia los animales en la sociedad, abordando problemas de salud pública asociados con perros sin hogar.</p>
      </div>
      <div class="col-md-5">
        <img src={imagen4} alt="" height={300} width={500} />
      </div>
    </div>
</main>

    )
  
}
export default Inicio;