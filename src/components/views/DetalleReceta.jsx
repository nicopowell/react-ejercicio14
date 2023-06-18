import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const DetalleReceta = () => {
  return (
    <Container className="mainSection">
      <Card className='mt-5'>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>Pizza</Card.Title>
              <hr />
              <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi consequatur saepe modi exercitationem iure obcaecati, soluta eveniet, necessitatibus reiciendis excepturi molestias explicabo dicta ex veritatis consectetur odit atque quo?
              <br/>
              <br/>
              <span className="fw-bold ">Categoria:</span> Salado
              <br />
              <span className="fw-bold ">Tiempo:</span> 40 min
              <br />
              <span className="fw-bold ">Porciones:</span> 4 personas
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className='mt-3'>
      <Card.Body>
              <Card.Title>Ingredientes</Card.Title>
              <hr />
              <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi consequatur saepe modi exercitationem iure obcaecati, soluta eveniet, necessitatibus reiciendis excepturi molestias explicabo dicta ex veritatis consectetur odit atque quo?
              </Card.Text>
              <Card.Title>Preparación</Card.Title>
              <hr />
              <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem veniam quam beatae, nihil inventore delectus possimus provident accusantium nulla non aperiam ab explicabo laudantium quasi, repudiandae fugit fuga atque a?
              </Card.Text>
            </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleReceta;