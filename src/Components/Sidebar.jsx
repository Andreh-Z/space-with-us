import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

function Sidebar() {
  return (
    <Navbar className="sidebar" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
