import React from 'react';
import "../login.css";
import "bootstrap/dist/css/bootstrap.min.css";



const Login = () => {

  const [Usuario, setUsuario] = React.useState("");
  const [Contraseña, setContraseña] = React.useState("");
  

  const guardarDatos = (e) => {
    e.preventDefault();

    if (!Usuario.trim()) {
      alert("ingrese nombre");
      return;
    }

    if (!Contraseña.trim()) {
      alert("ingrese contraseña");
      return;
    }
    

    alert(
      "procesando datos..." + Usuario+ Contraseña 
    );

    e.target.reset();
    setUsuario("");
    setContraseña("");
    
  };

    return (  
<div className="containerlogin ">
      <h1 className="loginPage-title"> Iniciar Sesion</h1>

      <form  onSubmit={guardarDatos} className="formlogin">
        <div className="col-md-8"> Nombre de usuario
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de usuario "
            name="Usuario"
            onChange={(e) => setUsuario(e.target.value)}
          ></input>
        </div>
        <div className="col-md-8">Contraseña  
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese contraseña"
            name="Contraseña"
            onChange={(e) => setContraseña(e.target.value)}
          ></input>
        </div>
        
        <div className="col-md-8">
          <button
            type="submit"
            className="btn btn-primary col-mt-15 " btn-block
            name="guardarDatos"
          >
            CONFIRMAR
          </button>
        </div>
        
      </form> 
      <div className="col-md-2">
          <button
            type="submit"
            className="btn btn-primary col-mt-15 registrarme " btn-block
            name="guardarDatos"
          >
            REGISTRARME
          </button>
          
        </div>
        <p className='olvide'>Olvide mi contraseña</p>
    </div>


    );
}
 
export default Login;