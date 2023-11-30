import imagen from "../assets/images/medios.png"
const Donaciones2 = () => { 
    return(
<main>
    <div>
        
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">¡Gracias por tu ayuda!</h1>
        <p className="lead">A continuacion te presentamos la variedad de metodos de pago que tienes para escoger y poder realizar tu donacion. Agradecemos infinitamente tu ayuda y esperamos que la vida te sonria.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
     
        </div>
      </div>
      <div className="col-lg-4  p-0  shadow-lg">
          <img className="rounded-lg-3" src={imagen} alt=""  width="560"/>
      </div>
    </div>
    </div>
</main>
    )
 }
 export default Donaciones2;