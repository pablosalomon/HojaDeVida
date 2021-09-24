import {
    Link
  } from "react-router-dom";

function Error404(){

	return(
	<div className="container">
         <img src="https://www.hostingplus.mx/wp-content/uploads/2020/12/error404quees.jpg"/>
		 <Link to="/" className="btn btn-danger">Ir a la pagina de inicio</Link>  
      </div>
		);
}

export default Error404;