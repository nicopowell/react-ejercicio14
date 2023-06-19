import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemReceta from "./recetas/ItemReceta";
import { consultaListaRecetas } from "../helpers/queries";
import { useEffect, useState } from "react";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultaListaRecetas().then((respuesta) => {
      setRecetas(respuesta);
    });
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
              <ItemReceta
                key={receta.id}
                receta={receta}
                setRecetas={setRecetas}
              ></ItemReceta>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Administrador;
