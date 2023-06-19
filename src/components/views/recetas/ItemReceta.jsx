import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = ({ receta, setReceta }) => {
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombre}</td>
      <td>{receta.tiempo}</td>
      <td>{receta.cantidad}</td>
      <td>{receta.categoria}</td>
      <td className="urlTabla">{receta.imagen}</td>
      <td>
        <Link className="btn btn-warning m-1" to={"/administrador/editar-receta/" + receta.id}>
          Editar
        </Link>
        <Button variant="danger" className="m-1">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
