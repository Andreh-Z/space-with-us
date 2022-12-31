import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Icon of the site</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/information">Information</Link>
            </Nav.Link>
            <NavDropdown title="Utilities" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/About">About us</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Link to="/Developer">Who made this</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
