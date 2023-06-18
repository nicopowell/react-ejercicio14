import React from "react";
import { Button, Card, Col, ListGroup } from "react-bootstrap";

const CardRecetas = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg"
            className="imagenCard"
          />
        </div>

        <Card.Body>
          <Card.Title>Pizza</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
          <div className="d-flex justify-content-between lead fs-6 text-secondary">
            <p>40 minutos</p>
            <p>Facil</p>
          </div>
          <hr />
          <Button variant="dark">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardRecetas;
