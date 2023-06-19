import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    setUsuarioLogueado({});
    sessionStorage.removeItem("usuario");
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
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
                <NavLink className={"nav-item nav-link"} to="/administrador">
                  Administrador
                </NavLink>
                <Button className={"nav-item nav-link"} variant="dark" onClick={logout}>
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
