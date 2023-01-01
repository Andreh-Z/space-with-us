import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";

function NavBar() {
  return (
    <Navbar sticky="top" id="navBar" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Image
            alt="space-us-logo"
            src={Logo}
            width="30"
            height="30"
            roundedCircle
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/" className="text-white">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/information" className="text-white">
                Information
              </Link>
            </Nav.Link>
            <NavDropdown title="Utilities" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/About" className="text-dark">
                  About us
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Developer" className="text-dark">
                  Who made this
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/resources" className="text-dark">
                  Bank of resources
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
