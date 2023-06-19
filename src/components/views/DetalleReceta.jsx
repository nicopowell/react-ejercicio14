import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { consultaReceta } from "../helpers/queries";
import Swal from "sweetalert2";

const DetalleReceta = () => {
  const { id } = useParams();
  const navegacion = useNavigate();
  const [receta, setReceta] = useState();
  const [ingredientes, setIngredientes] = useState();
  const [instrucciones, setInstrucciones] = useState();

  const [existeReceta, setExisteReceta] = useState(true);

  useEffect(() => {
    consultaReceta(id).then((respuesta) => {
      if (respuesta.id) {
        setExisteReceta(true);
        setReceta(respuesta);
      } else {
        Swal.fire("Ocurrio un error", `No pudimos encontrar la receta que buscas`, "error");
        setExisteReceta(false);
      }
    });
  }, [id]);

  useEffect(() => {
    if (receta) {
      setIngredientes(receta.ingredientes.split("\n"));
      setInstrucciones(receta.instrucciones.split("\n"));
    }
  }, [receta]);

  if (!receta) {
    return null;
  }

  return (
    <>
      {existeReceta ? (
        <Container className="mainSection">
          <Card className="mt-5">
            <Row>
              <Col md={6}>
                <Card.Img variant="top" src={receta.imagen} alt={receta.nombre} />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>{receta.nombre}</Card.Title>
                  <hr />
                  <Card.Text>
                    {receta.descripcion}
                    <br />
                    <br />
                    <span className="fw-bold ">Categoria:</span> {receta.categoria}
                    <br />
                    <span className="fw-bold ">Tiempo:</span> {receta.tiempo}
                    <br />
                    <span className="fw-bold ">Cantidad:</span> {receta.cantidad}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Ingredientes</Card.Title>
              <hr />
              {ingredientes && ingredientes.length > 0 ? (
                <ul>
                  {ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                  ))}
                </ul>
              ) : (
                <p>No hay ingredientes disponibles</p>
              )}
              <Card.Title>Preparación</Card.Title>
              <hr />
              {instrucciones && instrucciones.length > 0 ? (
                <ol className="listaOrdenada numerosBold">
                  {instrucciones.map((ingrediente, index) => (
                    <li className="mb-2" key={index}>{ingrediente}</li>
                  ))}
                </ol>
              ) : (
                <p>No hay instrucciones disponibles</p>
              )}
            </Card.Body>
          </Card>
        </Container>
      ) : (
        navegacion("/404")
      )}
    </>
  );
};

export default DetalleReceta;
