import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./home.css";

import Badge from "react-bootstrap/Badge";

function home() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="fs-2 fw-bold"
            >
              Personal Portfolio
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fs-5 ms-5">
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
              <Nav.Link className="me-2">
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  Resume
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="vh-100 align-items-center d-flex">
        <Row className="mx-auto mx-sm-0">
          <Col xs={12} className="w-100">
            <div className="w-100">
              <h1 className="fw-bold">
                Phumed Thumtechanon <Badge bg="secondary">Dutchie</Badge>
              </h1>
              <div class="wrapper fs-3">
                <span className="me-2">I'm</span>
                <span class="typing-demo"> Front-End Developer</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default home;
