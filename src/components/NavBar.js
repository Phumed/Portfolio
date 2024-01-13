import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary w-100">
          <Navbar.Brand>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="fs-3 fs-md-2 fw-bold"
            >
              Phumed Thumtechanon
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fs-5 ms-5 ">
              <Nav.Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  About
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/education" style={{ textDecoration: "none" }}>
                  Education
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/skills" style={{ textDecoration: "none" }}>
                  Skills
                </Link>
              </Nav.Link>
              <Nav.Link
                href="https://drive.google.com/file/d/1alNyuVM_pY2xeHvsLJMDZ2aJ-lIlECvL/view?usp=sharing"
                className="me-2 text-primary"
                target="_blank"
              >
                Resume
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavBar;
