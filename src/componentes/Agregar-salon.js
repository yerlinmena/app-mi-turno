import React, { Fragment } from "react";
import "../Agregarsalon.css";


const Agregarsalon = () => {
  const [nombresalon, setNombresalon] = React.useState("");
  const [direccionsalon, setDireccionsalon] = React.useState("");
  const [telefonosalon, setTelefonosalon] = React.useState("");

  const guardarDatos = (e) => {
    e.preventDefault();

    if (!nombresalon.trim()) {
      alert("ingrese nombre");
      return;
    }

    if (!direccionsalon.trim()) {
      alert("ingrese direccion");
      return;
    }
    if (!telefonosalon.trim()) {
      alert("ingrese telefono");
      return;
    }

    console.log(
      "procesando datos..." + nombresalon + direccionsalon + telefonosalon
    );

    e.target.reset();
    setNombresalon("");
    setDireccionsalon("");
    setTelefonosalon("");
  };

  return (
    <Fragment>
        <div className="agregarsalon">
           
      <h2> Agregar Salon</h2>
 <hr></hr>
      <form  onSubmit={guardarDatos}>
        <div className="col-md-12"> Nombre 
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del salon"
            name="nombresalon"
            onChange={(e) => setNombresalon(e.target.value)}
          ></input>
        </div>
        <div className="col-md-12">Direccion  
          <input
            type="text"
            className="form-control"
            placeholder="Direccion del salon"
            name="direccionsalon"
            onChange={(e) => setDireccionsalon(e.target.value)}
          ></input>
        </div>
        <div className="col-md-12" > Telefono 
          <input
            type="text"
            className="form-control"
            placeholder="Telefono del salon"
            name="telefonosalon"
            onChange={(e) => setTelefonosalon(e.target.value)}
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
      </form> 
      </div>
    </Fragment>
  );
};

export default Agregarsalon;
