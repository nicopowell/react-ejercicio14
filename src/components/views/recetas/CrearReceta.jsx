import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CrearReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (recetaNueva) => {
    consultaAgregarReceta(recetaNueva).then((respuestaCreated) => {
      console.log(respuestaCreated);
      if (respuestaCreated && respuestaCreated.status === 201) {
        Swal.fire(
          "Receta creada",
          `El producto ${recetaNueva.nombre} fue creado correctamente`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El producto ${recetaNueva.nombre} no fue creado, intentelo mas tarde`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container py-5 mainSection">
      <h1 className="display-4">Nueva receta</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza"
            {...register("nombre", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2",
              },
              maxLength: {
                value: 100,
                message: "La cantidad minima de caracteres es de 50",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder={`Agregar ingredientes separados por ///, por ejemplo: "1kg de Harina///2 Huevos"`}
            {...register("ingredientes", {
              required: "Los ingredientes son un campo obligatorio",
              pattern: {
                value: /^[\w]{10,500}(\/\/\/\w+)?$/,
                message: "Los ingredientes deben contener entre 10 y 500 caracteres y estar separados por /// entre ellos"
              }
            })}
          />
          <Form.Text className="text-danger">{errors?.ingredientes?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formInstrucciones">
          <Form.Label>Instrucciones*</Form.Label>
          <Form.Control as="textarea" placeholder={`Mezclar en un bol el harina con...`} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTiempo">
          <Form.Label>Tiempo</Form.Label>
          <Form.Control type="text" placeholder="Ej: 40 min" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCantidad">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control type="text" placeholder="Ej: 4 personas" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control as="textarea" placeholder={`Esta receta de pizza facil y rapida`} />
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
