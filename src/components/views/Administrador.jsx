import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemReceta from "./recetas/ItemReceta";
import { consultaListaRecetas, consultaListaUsuarios } from "../helpers/queries";
import { useEffect, useState } from "react";
import ItemUsuario from "./usuarios/ItemUsuario";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    consultaListaRecetas().then((respuesta) => {
      setRecetas(respuesta);
    });
    consultaListaUsuarios().then((respuesta) => {
      setUsuarios(respuesta)
    })
  }, []);

  return (
    <div className="container mainSection my-4">
      <section>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Recetas disponibles</h1>
          <Link className="btn btn-primary" to="/administrador/crear-receta">
            Agregar
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Receta</th>
              <th>Tiempo</th>
              <th>Cantidad</th>
              <th>Categoria</th>
              <th>URL de Imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {recetas.map((receta) => (
              <ItemReceta key={receta.id} receta={receta} setRecetas={setRecetas}></ItemReceta>
            ))}
          </tbody>
        </Table>
      </section>
      <hr />
      <section>
        <h1 className="display-4 mt-5">Usuarios</h1>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Administrador</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <ItemUsuario key={usuario.id} usuario={usuario} setUsuarios={setUsuarios}></ItemUsuario>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Administrador;
