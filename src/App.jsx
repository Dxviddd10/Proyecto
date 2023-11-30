import Donaciones from "./Pages/Donaciones";
import Nosotros from "./Pages/Nosotros";
import Inicio from "./Pages/Inicio"
import Navbar from "./Components/NavBar"
import Footer from "./Components/Footer"
import {Route,Routes} from "react-router-dom"
import './App.css'
import Donaciones2 from "./Pages/Donaciones2";
const App = () => { 
  return(
    <>
    <Navbar />
   
    <Routes>
      <Route element={<Inicio />} path="/"></Route>
      <Route element={<Nosotros />} path="/nosotros"></Route>
      <Route element={<Donaciones />} path="/donaciones"></Route>
      <Route element={<Donaciones2 />} path="/donaciones2"></Route>
      
    </Routes>
   <br />
    <Footer/>
  </>
  )
 }
export default App;
