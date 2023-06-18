import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/common/Menu";
import Inicio from "./components/views/Inicio";
import Footer from "./components/common/Footer";
import "./App.css";
import Registro from "./components/views/Registro";
import Login from "./components/views/Login";
import DetalleReceta from "./components/views/DetalleReceta";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import Error404 from "./components/views/Error404";
import Administrador from "./components/views/Administrador";
import CrearReceta from "./components/views/recetas/CrearReceta";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Registro></Registro>}></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/detalle" element={<DetalleReceta></DetalleReceta>}></Route>
          <Route
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdministrador></RutasAdministrador>
              </RutasProtegidas>
            }
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
