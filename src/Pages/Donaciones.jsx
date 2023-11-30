import { NavLink } from "react-router-dom";
import imagen from "../assets/images/img6.jpg"
const Donaciones = () => {
    return(
<main>
    
<div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Aqui puedes ayudarnos con tu donación</h1>
        <p className="col-lg-10 fs-4">Estaremos muy agradecidos si tienes la posibilidad de colaborarnos con tu donacion, recuerda que para donar hay un monto minimo de $15000 pesos colombianos o $4US. Para las donaciones de juguetes u otras cosas para los perritos puedes contactarnos a cualquiera de nuestras redes sociales.</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
        <h1>¿Que tipo de donacion deseas hacer?</h1>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'space-between' }}> 
          <NavLink type="button" className="btn btn-outline-primary border-bottom border-body shadow-sm" to="/donaciones2"> $70000</NavLink>
          <NavLink type="button" className="btn btn-outline-primary" to="/donaciones2"> $15000</NavLink>
          <NavLink type="button" className="btn btn-outline-primary" to="/donaciones2"> $30000</NavLink>
          
          </div>
          <br />
          <div className="form-floating mb-3">
            <input  className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Ingrese aqui otro valor</label>
          </div>
         
          <NavLink type="button" className="w-100 btn btn-lg btn-primary" to="/donaciones2">Realizar donacion</NavLink>
          <hr className="my-4"/>
          <small className="text-body-secondary">Al dar click en realizar donacion estas aceptando los terminos y condiciones.</small>
        </form>
      </div>
    </div>
  </div>
</main>
    )
 }
 export default Donaciones;