import React,{ Fragment} from 'react'
import "../reservacliente.css"

const Reservacliente = () => {

    const [fecha, setFecha] = React.useState("");
    const [horainicio, setHorainicio] = React.useState("");
    const [establecimiento, setNombresalonreserva] = React.useState("");
    const [cliente, setCliente] = React.useState("");
    const [servicio, setServicio] = React.useState("");
    
  
    const guardarDatos = (e) => {
      e.preventDefault();
  
      if (!fecha.trim()) {
        alert("ingrese fecha");
        return;
      }
  
      if (!establecimiento.trim()) {
        alert("ingrese establecimiento");
        return;
      }
      if (!cliente.trim()) {
        alert("ingrese nombre cliente");
        return;
      }
      if (!servicio.trim()) {
        alert("ingrese servicio");
        return;
      }
     
      if (!horainicio.trim()) {
        alert("ingrese hora inicio");
        return;
      }
     
  
      
  
      e.target.reset();
      setFecha("");
      setHorainicio("");
      setNombresalonreserva("");
      setCliente("");
      setServicio("");
      
      };
    return (  

        <Fragment>
        <div className="reservacliente">
           
      <h2> Agregar reserva cliente</h2>
 <hr></hr>
      <form  onSubmit={guardarDatos}>
        <div className="col-md-12"> Fecha 
          <input
            type="date"
            className="form-control"
            placeholder="Fecha"
            name="fecha"
            onChange={(e) => setFecha(e.target.value)}
          ></input>
        </div>
        <div className="col-md-12"> Hora inicio
          <input
            type="time"
            className="form-control"
            placeholder="Hora"
            name="horainicio"
            onChange={(e) => setHorainicio(e.target.value)}
          ></input>
        </div>
        
        <div className="col-md-12">Establecimiento 
          <input
            type="text"
            className="form-control"
            placeholder="nombre del salon"
            name="nombre-salon-reserva"
            onChange={(e) => setNombresalonreserva(e.target.value)}
          ></input>
        </div>
        <div className="col-md-12" > Funcionario
          <input
            type="text"
            className="form-control"
            placeholder="Funcionario "
            name="funcionarioreserva"
            onChange={(e) => setCliente(e.target.value)}
          >
            
          </input>
        </div>
        <div className="col-md-12" > Servicio
          <input
            type="text"
            className="form-control"
            placeholder="Servicio de reserva "
            name="servicio"
            onChange={(e) => setServicio(e.target.value)}
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
 
export default Reservacliente;