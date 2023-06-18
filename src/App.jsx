import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/common/Menu";
import Inicio from "./components/views/Inicio";
import Footer from "./components/common/Footer";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/detalle" element={<DetalleProducto></DetalleProducto>}></Route>
          <Route
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdministrador></RutasAdministrador>
            </RutasProtegidas>
          }
        ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
