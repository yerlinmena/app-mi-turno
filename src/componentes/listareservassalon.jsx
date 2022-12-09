import React from "react";
import "../reservas.css";
import { FaListUl } from "react-icons/fa";






const Listareservassalon = () => {
  return (
    <div className="reservas" mt-5>
      <h3>RESERVAS</h3>
      <h4 className="lista-reservas">
        {<FaListUl />} &nbsp; Lista de reservas
      </h4>
      <hr />
      <div className="table-responsive">
        <table className="table table-bordered ">
          <thead className="table-active">
            <tr>
              <th>#</th>
              <th>fecha</th>
              <th>horainicio</th>
              <th>horafinal</th>
              <th>establecimiento</th>
              <th>funcionario</th>
              <th>servicio</th>
              <th>precio</th>
              <th>estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
             <td> <button className="btn btn-primary">
                Editar
              </button></td>
              <td> <button className="btn btn-dangern">
                Eliminar
              </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listareservassalon;
