import React from "react";
import { Container, Row } from "react-bootstrap";
import CardRecetas from "./recetas/CardRecetas";

const Inicio = () => {
  return (
    <div className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/5971874/pexels-photo-5971874.jpeg"
        alt="fondo cafe"
      />
      <Container className="my-3">
        <h1 className="display-4 text-center mb-3">Nuestras recetas</h1>
        <Row>
          <CardRecetas></CardRecetas>
          <CardRecetas></CardRecetas>
          <CardRecetas></CardRecetas>
          <CardRecetas></CardRecetas>
          <CardRecetas></CardRecetas>
          <CardRecetas></CardRecetas>
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
