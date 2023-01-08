import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";

function NavBar() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      {" "}
      {/* Agrega un efecto de transición suave al menú cuando el usuario cambie de página */}
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
                <motion.div whileHover={{ scale: 1.1 }}>
                  {" "}
                  {/* Agrega un efecto de entrada suave al hacer hover */}
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </motion.div>
              </Nav.Link>
              <Nav.Link>
                <motion.div whileHover={{ scale: 1.1 }}>
                  {" "}
                  {/* Agrega un efecto de entrada suave al hacer hover */}
                  <Link to="/information" className="text-white">
                    Information
                  </Link>
                </motion.div>
              </Nav.Link>
              <NavDropdown title="Utilities" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    {" "}
                    {/* Agrega un efecto de entrada suave al hacer hover */}
                    <Link to="/About" className="text-dark">
                      About us
                    </Link>
                  </motion.div>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    {" "}
                    {/* Agrega un efecto de entrada suave al hacer hover */}
                    <Link to="/Developer" className="text-dark">
                      Who made this
                    </Link>
                  </motion.div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    {/* Agrega un efecto de entrada suave al hacer hover */}
                    <Link to="/flighs" className="text-dark">
                      Flighs
                    </Link>
                  </motion.div>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <motion.div
                  onClick={() => {
                    // Tu código para desplazarse suavemente al elemento del menú
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  Log In
                </motion.div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;
