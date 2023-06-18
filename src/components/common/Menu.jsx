import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to='/'>Rolling Chef</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={'nav-item nav-link'} to='/'>Inicio</NavLink>
            <NavLink className={'nav-item nav-link'} to='/administrador'>Administrador</NavLink>
            <NavLink className={'nav-item nav-link'} to='/registro'>Registro</NavLink>
            <NavLink className={'nav-item nav-link'} to='/login'>Ingresar</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
