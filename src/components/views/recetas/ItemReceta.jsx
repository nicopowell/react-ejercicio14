import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultaBorrarReceta, consultaListaRecetas } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemReceta = ({ receta, setRecetas }) => {
  const borrarReceta = ()=>{
    Swal.fire({
      title: `¿Esta seguro de borrar la receta ${receta.nombre}?`,
      text: "No se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        consultaBorrarReceta(receta.id).then((respuesta)=>{
          if(respuesta.status === 200){
            Swal.fire(
              'Receta eliminada',
              `La receta ${receta.nombre} fue eliminado correctamente`,
              'success'
            );
            //actualizar la tabla de productos
            consultaListaRecetas().then((respuesta)=> setRecetas(respuesta))
          }else{
            Swal.fire(
              'Ocurrió un error',
              `Intente realizar esta operación nuevamente mas tarde`,
              'success'
            )
          }
        })
        
      }
    })
  }

  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombre}</td>
      <td>{receta.tiempo}</td>
      <td>{receta.cantidad}</td>
      <td>{receta.categoria}</td>
      <td className="urlTabla">{receta.imagen}</td>
      <td className="d-flex justify-content-evenly">
        <Link className="btn btn-warning m-1" to={"/administrador/editar-receta/" + receta.id}>
          Editar
        </Link>
        <Button variant="danger" className="m-1" onClick={borrarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
