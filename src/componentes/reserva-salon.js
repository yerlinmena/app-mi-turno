import React,{ Fragment} from 'react'
import "../reservasalon.css"

const Reservasalon = () => {

    const [fecha, setFecha] = React.useState("");
    const [horainicio, setHorainicio] = React.useState("");
    const [horafinal, setHorafinal] = React.useState("");
    const [establecimiento, setNombresalonreserva] = React.useState("");
    const [funcionario, setFuncionarioreserva] = React.useState("");
    const [servicio, setServicio] = React.useState("");
    const [valor, setValor] = React.useState("");
    const [estado, setEstado] = React.useState("");
  
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
      if (!funcionario.trim()) {
        alert("ingrese funcionario");
        return;
      }
      if (!servicio.trim()) {
        alert("ingrese servicio");
        return;
      }
      if (!valor.trim()) {
        alert("ingrese valor");
        return;
      }
      if (!estado.trim()) {
        alert("ingrese estado");
        return;
      }
      if (!horainicio.trim()) {
        alert("ingrese hora inicio");
        return;
      }
      if (!horafinal.trim()) {
        alert("ingrese hora final");
        return;
      }
  
      
  
      e.target.reset();
      setFecha("");
      setHorainicio("");
      setHorafinal("");
      setNombresalonreserva("");
      setFuncionarioreserva("");
      setServicio("");
      setValor("");
      setEstado("");
      };
    return (  

        <Fragment>
        <div className="reservasalon">
           
      <h2> Agregar reserva salon</h2>
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
        <div className="col-md-12"> Hora final 
          <input
            type="time"
            className="form-control"
            placeholder="Hora"
            name="horafinal"
            onChange={(e) => setHorafinal(e.target.value)}
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
            onChange={(e) => setFuncionarioreserva(e.target.value)}
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
        <div className="col-md-12" > valor
          <input
            type="text"
            className="form-control"
            placeholder="Precio del servicio "
            name="valor"
            onChange={(e) => setValor(e.target.value)}
          >
            
          </input>
        </div>
        <div className="col-md-12" > Estado
          <input
            type="text"
            className="form-control"
            placeholder="Estado del servicio "
            name="estadoservicio"
            onChange={(e) => setEstado(e.target.value)}
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
 
export default Reservasalon;