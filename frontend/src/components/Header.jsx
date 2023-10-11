import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="\">
            <img src={logo} alt="pic" />
            Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="/cart" className="d-md-none">
                <FaShoppingCart /> Cart
              </NavLink>
              <NavLink href="/cart" className="d-none d-md-inline">
                <FaShoppingCart />
              </NavLink>
              <NavLink href="/login" className="d-md-none">
                <FaUser /> Sign In
              </NavLink>
              <NavLink href="/login" className="d-none d-md-block">
                <FaUser />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
