import imagencita from "../assets/images/imggg.jpg"
import imagencita2 from "../assets/images/img4.jpg"
import imagencita3 from "../assets/images/imgsolidaria.jpg"
import { NavLink } from "react-router-dom"
const Nosotros = () => { 
    return(
<main>
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={imagencita} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">¿Quienes somos?</h1>
        <p className="lead">"Patas Solidarias" nació de la profunda preocupación y empatía de un grupo de amantes de los animales que, al observar la creciente población de perros callejeros en nuestra comunidad, decidieron tomar acción. La iniciativa comenzó como una respuesta espontánea ante el deseo compartido de hacer algo significativo para mejorar las vidas de estos seres indefensos.

La historia se remonta a encuentros con perros abandonados, a historias conmovedoras de rescates fortuitos y a la constatación de que, como comunidad, teníamos la capacidad de marcar la diferencia. El deseo de crear un cambio positivo y sostenible para estos animales marginados se convirtió en la fuerza impulsora detrás de la creación de "Patas Solidarias".</p>
       
      </div>
    </div>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={imagencita2} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Nuestros proyectos</h1>
        <p className="lead">En "Patas Solidarias", estamos comprometidos con una variedad de proyectos diseñados para abordar de manera integral la problemática de los perros callejeros. A continuación, te presentamos detalles sobre nuestros proyectos actuales y una visión de lo que planeamos para el futuro.
        Como proyectos actuales, tenemos una gran variedad tales como: Rescatar y rehabilitar la mayor cantidad de perritos de la calle, esto priorizando los mas vulnerables como los mas viejitos y enfermos o los cachorros. Otro de estos es trabajar activamente para encontrar hogares amorosos y responsables para los perritos rescatados. Como proyectos a futuro tambien queremos ampliar campañas de esterilizacion y poder crear una unidad movil de atencion veterinaria.</p>
        
      </div>
    </div>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={imagencita3} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">¿Como puedes ayudar?</h1>
        <p className="lead">Como es bien sabido, es muy dificil poder costear los gastos y todo lo necesario para cumplir los proyectos que tenemos planteados, por eso es necesario tener algunas ayudas.
        Puedes ayudar de muchas maneras, puedes adoptar responsablemente uno de los perritos, difundirnos en redes sociales, realizar donaciones de alimentos, juguetes, mantas y otros suministros que nos puedan ayudar para los perritos y por ultimo puedes realizar donaciones financieras, que para este caso puedes hacerlo dando click en el boton de abajo.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <NavLink type="button" className="btn btn-outline-primary border-bottom border-body" to="/Donaciones">Donaciones</NavLink>

          
        </div>
      </div>
    </div>
    </main>
    )
}
export default Nosotros;