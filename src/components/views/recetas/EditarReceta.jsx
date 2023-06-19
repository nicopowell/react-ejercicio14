import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { consultaAgregarReceta, consultaEditarReceta, consultaReceta } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const EditarReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const {id} = useParams();
  const navegacion = useNavigate()

  useEffect(()=>{
    consultaReceta(id).then((respuesta)=>{
      if(respuesta){
        setValue('nombre', respuesta.nombre);
        setValue('ingredientes', respuesta.ingredientes);
        setValue('instrucciones', respuesta.instrucciones);
        setValue('tiempo', respuesta.tiempo);
        setValue('cantidad', respuesta.cantidad);
        setValue('categoria', respuesta.categoria);
        setValue('descripcion', respuesta.descripcion);
        setValue('imagen', respuesta.imagen);
      }else{
        Swal.fire('Ocurrio un error', `No se puede editar el producto, intentelo mas tarde`, 'error');
      }
    })
  }, [])

  const onSubmit = (recetaEditada) => {
    consultaEditarReceta(recetaEditada, id).then((respuestaCreated) => {
      if (respuestaCreated && respuestaCreated.status === 200) {
        Swal.fire(
          "Receta editada",
          `El producto ${recetaEditada.nombre} fue editada correctamente`,
          "success"
        );
        navegacion('/administrador')
        reset();
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El producto ${recetaEditada.nombre} no fue editada, intentelo mas tarde`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container py-5 mainSection">
      <h1 className="display-4">Editar receta</h1>
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
                value: 50,
                message: "La cantidad máxima de caracteres es de 50",
              }
            })}
          />
          <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder={`Agregar ingredientes separados por saltos de linea`}
            {...register("ingredientes", {
              required: "Los ingredientes son un campo obligatorio",
              minLength: {
                value: 10,
                message: "La cantidad minima de caracteres es de 2 y los ingredientes deben estar separados por por saltos de linea",
              },
              maxLength: {
                value: 2000,
                message: "La cantidad máxima de caracteres es de 50 y los ingredientes deben estar separados por por saltos de linea",
              }
            })}
          />
          <Form.Text className="text-danger">{errors?.ingredientes?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formInstrucciones">
          <Form.Label>Instrucciones*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder={`Agregar las instrucciones separando los pasos con saltos de linea`}
            {...register("instrucciones", {
              required: "Las instrucciones son un campo obligatorio",
              minLength: {
                value: 10,
                message: "La cantidad minima de caracteres es de 2 y los pasos deben estar separados por saltos de linea",
              },
              maxLength: {
                value: 2000,
                message: "La cantidad máxima de caracteres es de 50 y los pasos deben estar separados por saltos de linea",
              }
            })}
          />
          <Form.Text className="text-danger">{errors?.instrucciones?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTiempo">
          <Form.Label>Tiempo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 40 min"
            {...register("tiempo", {
              required: "El tiempo de preparacion campo obligatorio",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d\s]{3,10}$/,
                message:
                  "El tiempo de preparacion debe contener entre 3 y 10 caracteres, y debe contener 1 letra y 1 numero",
              },
            })}
          />
          <Form.Text className="text-danger">{errors?.tiempo?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCantidad">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 4 personas"
            {...register("cantidad", {
              required: "La cantidad es un dato obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2",
              },
              maxLength: {
                value: 15,
                message: "La cantidad máxima de caracteres es de 15",
              },
            })}
          />
          <Form.Text className="text-danger">{errors?.cantidad?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
              validate: value => value !== ""
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder={`Esta receta de pizza facil y rapida`}
            {...register("descripcion", {
              required: "La descripcion de la receta es obligatoria",
              minLength: {
                value: 5,
                message: "La cantidad minima de caracteres es de 5",
              },
              maxLength: {
                value: 500,
                message: "La cantidad máxima de caracteres es de 500",
              },
            })}
          />
          <Form.Text className="text-danger">{errors?.descripcion?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            {...register("imagen", {
              required: "La imagen es un campo obligatorio",
              pattern: {
                value: /^(?=.{1,150}$)\bhttps?:\/\/\S+\.(jpg|jpeg|png)\b/,
                message: "El link de la imagen debe ser valido y contener .jpg, .jpeg o .png",
              },
            })}
          />
          <Form.Text className="text-danger">{errors?.imagen?.message}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarReceta;
