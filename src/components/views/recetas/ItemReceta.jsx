import { Button } from "react-bootstrap";


const ItemProducto = ({receta, setReceta}) => {
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombre}</td>
      <td>{receta.tiempo}</td>
      <td>{receta.cantidad}</td>
      <td>{receta.categoria}</td>
      <td className="urlTabla">{receta.imagen}</td>
      <td>
        <Button variant="warning" className="m-1">
          Editar
        </Button>
        <Button variant="danger" className="m-1">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
