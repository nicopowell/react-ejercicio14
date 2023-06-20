import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { consultaAgregarUsuario, registro } from "../helpers/queries";
import Swal from "sweetalert2";

const Registro = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuarioNuevo) => {
    registro(usuarioNuevo).then((respuesta) => {
      if (!respuesta) {
        consultaAgregarUsuario(usuarioNuevo).then((respuestaCreated) => {
          if (respuestaCreated && respuestaCreated.status === 201) {
            sessionStorage.setItem("usuario", JSON.stringify(usuarioNuevo));
            Swal.fire(
              "Bienvenido",
              `${usuarioNuevo.nombreUsuario} te registraste correctamente`,
              "success"
            );
            setUsuarioLogueado(usuarioNuevo);
            //redireccionar
            navegacion("/");
          } else {
            Swal.fire(
              "Ocurrió un error en el registro",
              `Intentelo mas tarde`,
              "error"
            );
          }
        });
      } else {
        Swal.fire("Error", "El usuario o el email ya existe", "error");
      }
    });
  };

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Registro</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un usuario"
                {...register("nombreUsuario", {
                  required: "El usuario es un dato obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9_]{4,16}$/,
                    message:
                      "El usuario debe contener unicamente letras, numeros y guiones bajos entre 4 y 16 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.nombreUsuario?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "El email debe cumplir con el formato mail@dominio.com",
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "El password es un dato obligatorio",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "El password debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Registro;
