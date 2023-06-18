import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td>Pizza</td>
      <td>Salado</td>
      <td>40 min</td>
      <td>https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg</td>
      <td>
        <Button variant="warning">
          Editar
        </Button>
        <Button variant="danger">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
