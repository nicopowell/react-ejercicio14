import React from "react";
import { Button, Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardRecetas = ({receta}) => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card className="h-100">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={receta.imagen}
            alt={receta.nombre}
            className="imagenCard"
          />
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title>{receta.nombre}</Card.Title>
          <Card.Text className="flex-grow-1">
          {receta.descripcion}
          </Card.Text>
          <div className="d-flex justify-content-between lead fs-6 text-secondary">
            <p>{receta.tiempo}</p>
            <p>{receta.cantidad}</p>
          </div>
          <hr />
          <Link className="btn btn-dark" to={"/detalle/" + receta.id}>
          Ver detalle
        </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardRecetas;
