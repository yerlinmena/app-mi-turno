import React,{ Fragment} from 'react'
import "../agregarfuncionario.css";

const Agregarfuncionario = () => {

    const [identificacion, setNidentificacion] = React.useState("");
    const [usuario, setUsuario] = React.useState("");
    const [apellidos, setApellidos] = React.useState("");
    const [celular, setCelular] = React.useState("");
    const [correo, setCorreo] = React.useState("");
    const [direccionf, setDireccionf] = React.useState("");
    const [genero, setGenero] = React.useState("");
    const [salon, setSalon] = React.useState("");
    const [contraseña, setContraseña] = React.useState("");
    const [cancelaredit, setCancelar] = React.useState(false);
  

    const cancelar =() =>{
        setCancelar(!cancelaredit);
        setNidentificacion(identificacion);
        setUsuario(usuario);
        setApellidos(apellidos);
        setCelular(celular);
        setCorreo(correo);
        setDireccionf(direccionf);
        setGenero(genero);
        setSalon(salon);
        setContraseña(contraseña);

    }
    const guardarDatos = (e) => {
      e.preventDefault();
  
        if (!identificacion.trim()) {
        alert("ingrese identificacion");
        return;
      }
      if (!usuario.trim()) {
        alert("ingrese usuario");
        return;
      }
  
    
      if (!apellidos.trim()) {
        alert("ingrese apellidos");
        return;
      }

      if (!celular.trim()) {
        alert("ingrese numero");
        return;
      }
      if (!correo.trim()) {
        alert("ingrese correo");
        return;
      }
      if (!direccionf.trim()) {
        alert("ingrese direccion");
        return;
      }
      if (!genero.trim()) {
        alert("ingrese genero");
        return;
      }
      if (!salon.trim()) {
        alert("ingrese salon");
        return;
      }
      if (!contraseña.trim()) {
        alert("ingrese contraseña");
        return;
      }
  
      
  
      e.target.reset();
      setNidentificacion("");
      setUsuario("");
      setApellidos("");
      setCelular("");
      setCorreo("");
      setDireccionf("");
      setGenero("");
      setSalon("");
      setContraseña("");
    };
  
    return (

        <Fragment>
      
          <div className="funcionario">
             
        <h2> Agregar Funcionario</h2>
   <hr></hr>
        <form onSubmit={guardarDatos}>
          <div className="col-md-12"> N.identificacion
            <input
              type="text"
              className="form-control"
              placeholder="Numero de identificacion"
              name="nidentificacion"
              onChange={(e) => setNidentificacion(e.target.value)}
            ></input>
          </div>
          <div className="col-md-12">nombre 
            <input
              type="text"
              className="form-control"
              placeholder="Nombre funcionario"
              name="usuario"
              onChange={(e) => setUsuario(e.target.value)}
            ></input>
          </div>
          <div className="col-md-12" > Apellidos 
            <input
              type="text"
              className="form-control"
              placeholder="Apellidos funcionario"
              name="apellidos"
              onChange={(e) => setApellidos(e.target.value)}
              ></input>
            </div>
            <div className="col-md-12" > Numero 
            <input
              type="text"
              className="form-control"
              placeholder="Numero de celular"
              name="celular"
              onChange={(e) => setCelular(e.target.value)}
            >
              
            </input>
            </div>
            <div className="col-md-12" > Correo 
            <input
              type="text"
              className="form-control"
              placeholder="Correo electronico"
              name="correo"
              onChange={(e) => setCorreo(e.target.value)}
            >
              
            </input>
            </div>
            <div className="col-md-12" > Direccion 
            <input
              type="text"
              className="form-control"
              placeholder="Direccion funcionario."
              name="direccionf"
              onChange={(e) => setDireccionf(e.target.value)}
            >
              
            </input>
            </div>
            <div className="col-md-12" > Genero 
            <input
              type="text"
              className="form-control"
              placeholder="Hombre, Mujer, Otro."
              name="genero"
              onChange={(e) => setGenero(e.target.value)}
            >
              
            </input>
            </div>
             <div className="col-md-12" > Salon
            <input
              type="text"
              className="form-control"
              placeholder="Centro de estetica"
              name="salon"
              onChange={(e) => setSalon(e.target.value)}
            >
              
            </input>
            </div>
            <div className="col-md-12" > Contraseña 
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name="apellidos"
              onChange={(e) => setContraseña(e.target.value)}
            >
              
            </input>
            
          </div>
          <div className="col-md-3">
            <button
              type="submit"
              className="btn btn-primary "
              name="guardarDatos"
            >
              Guardar
              </button>
        </div>
        <div className="col-md-3">
            <button
              type="submit"
              className="btn btn-primary "
              name="guardarDatos"
              onClick={cancelar}
            >
              Cancelar
              </button>
        </div>
      </form> 
      </div>
    </Fragment>
      
    );
    
};
 
export default Agregarfuncionario;