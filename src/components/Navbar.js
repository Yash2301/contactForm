import React from 'react';
import { Navbar,Nav,Button } from "react-bootstrap";


function NavbarCustom() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sim Form</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">ABOUT US</Nav.Link>
            <Nav.Link href="#link">SERVICES</Nav.Link>
            <Nav.Link href="#link">CASE STUDIES</Nav.Link>
            <Nav.Link href="#link">HOW IT WORKS</Nav.Link>
            <Nav.Link href="#link">BLOG</Nav.Link>
            </Nav>
            <Button variant="outline-success">Contact us</Button>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCustom;
