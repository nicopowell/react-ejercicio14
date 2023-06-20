import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemUsuario = ({usuario, setUsuarios}) => {
  return (
    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>{(usuario.administrador) ? ("Si") : ("No")}</td>
      <td className="d-flex justify-content-evenly">
        <Link className="btn btn-warning m-1" to={"/administrador/editar-usuario/" + usuario.id}>
          Editar
        </Link>
        <Button variant="danger" className="m-1">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;