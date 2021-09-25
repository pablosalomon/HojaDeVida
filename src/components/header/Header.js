import {
    Link
  } from "react-router-dom";
import './Header.css';
import foto from './foto.jpg';
function Header (){
    return(
        <header>
        <div class="container">
            <div className="foto">
                <img src={foto} alt="foto pablo"/>
            </div>
        </div>
        <div className="texto">
            <h1 className="ah1"><span className="nombre">Pablo</span> Antonio <span className="nombre">Salomón</span> Gomez</h1>
            <h3>“Animado, determinado y creativo”</h3>
            <Link to="/" className="btn btn-danger">Volver</Link>  
        </div>
        </header>
    );
}
export default Header;