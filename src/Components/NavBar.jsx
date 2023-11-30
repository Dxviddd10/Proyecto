import {NavLink} from "react-router-dom"
import Logo from "../assets/images/loguito.png"

const Navbar = () => { 
    return(
        <>
        <nav className="navbar bg-white border-bottom border-body"
            data-bs-theme="dark">
            <div className="container">
            <NavLink className="btn btn-outline" to="/">
                <img  src={Logo} height={50} width={50} />
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/">Inicio</NavLink>
                <NavLink className="btn btn-outline-primary" to="/nosotros">Nosotros</NavLink>
                <NavLink className="btn btn-outline-primary" to="/donaciones">Donaciones</NavLink>
                
            </div>
        </nav>
    
    </>
    )
 }
 export default Navbar;