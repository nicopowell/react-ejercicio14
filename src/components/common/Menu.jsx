import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    setUsuarioLogueado({});
    sessionStorage.removeItem("usuario");
    Swal.fire(
      "Cerraste sesión",
      `Se cerro la sesión correctamente`,
      "success"
    );
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand as={Link} className="fw-semibold" to="/">
          Rolling Chef
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={"nav-item nav-link"} to="/">
              Inicio
            </NavLink>

            {usuarioLogueado.nombreUsuario ? (
              <>
                {usuarioLogueado.administrador ? (<NavLink className={"nav-item nav-link"} to="/administrador">
                  Administrador
                </NavLink>) : (null)}
                <Button className={"nav-item nav-link"} variant="dark" id="botonLogout" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink className={"nav-item nav-link"} to="/login">
                  Login
                </NavLink>
                <NavLink className={"nav-item nav-link"} to="/registro">
                  Registro
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
