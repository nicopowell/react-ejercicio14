import { Form, Button } from "react-bootstrap";

const CrearReceta = () => {
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Pizza" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control as="textarea" placeholder={`500g de harina 000\n700ml de agua`} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Instrucciones*</Form.Label>
          <Form.Control as="textarea" placeholder={`Mezclar en un bol el harina con...`} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Porciones</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 4 personas"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearReceta;
