import React from "react";
import { FaStoreAlt } from "react-icons/fa"; 
import Login from "./componentes/login";
import Inicio from "./componentes/inicio";
import Listareservassalon from "./componentes/listareservassalon";
import Agregarsalon from "./componentes/Agregar-salon";
import Agregarfuncionario from "./componentes/Agregar-funcionario";
import Reservasalon from "./componentes/reserva-salon";
import Reservacliente from "./componentes/Reserva-cliente";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';





function App() {
  
  return (

    <>
      

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
     


    <Router position="fixed">
      
        <div className="btn-group mt-5">

        <Link to="/" className="btn btn-dark " >
             {<FaStoreAlt />}
          
        </Link>
        <Link to="/listareservassalon" className="btn btn-dark" >
          Reservas
        </Link>

        <Link to="/Agregar-salon" className="btn btn-dark" >
          + Salon
        </Link>
        <Link to="/Agregar-funcionario" className="btn btn-dark" >
          + funcionario
        </Link>
        <Link to="/Reserva-cliente" className="btn btn-dark" >
          + cliente
        </Link>
        <Link to="/Reserva-salon" className="btn btn-dark" >
          + salon R
        </Link>
        <Link to="/create-employee" className="btn btn-dark" >
          + crear employe
        </Link>
        

        </div>
      <div>
        
        <hr />
        <Routes>
        

          <Route path="/Agregar-funcionario" element={<Agregarfuncionario />}>
            
          </Route>
          <Route path="/listareservassalon" element={ <Listareservassalon /> } >
            
          </Route>
          <Route path="/Agregar-salon" exact element={<Agregarsalon/>}>
          
          </Route>
          <Route path="/Agregar-funcionario" exact element={<Agregarfuncionario/>}>
          
          </Route>
          <Route path="/Reserva-cliente" exact element={<Reservacliente/>}>
          
          </Route>
          <Route path="/Reserva-salon" exact element={<Reservasalon/>}>
          
          </Route>
          
        </Routes>
      </div>

    </Router>
</>
  );
}

export default App;

