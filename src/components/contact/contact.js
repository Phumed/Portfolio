import React from "react";
import NavBar from "../NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function contact() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row className="mt-2">
          <h5>CONTACT</h5>
        </Row>
        <Row className="mt-2">
          <Col className="mb-4 " xs={12} md={6}>
            <Row className="bg-light me-md-4 h-100 mx-md-0 mx-1">
              <Col
                xs={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span class="material-symbols-outlined">location_on</span>
              </Col>
              <Col className="my-5">
                <div className="fs-4 fw-bold">My Address</div> Bangkok
              </Col>
            </Row>
          </Col>
          <Col className="mb-4" xs={12} md={6}>
            <Row className="bg-light h-100  mx-md-0 mx-1">
              <Col
                xs={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span class="material-symbols-outlined">share</span>
              </Col>
              <Col className="my-5">
                <div className="fs-4 fw-bold">Social Profiles</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Row className="bg-light me-md-4 h-100 mx-md-0 mx-1">
              <Col
                xs={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span class="material-symbols-outlined">mail</span>
              </Col>
              <Col className="my-5">
                <div className="fs-4 fw-bold">Email</div> Dutchie2546@gmail.com
                <br />
                phumed.thu@student.mahidol.edu
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row className="bg-light h-100 mx-md-0 mx-1">
              <Col
                xs={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span class="material-symbols-outlined">call</span>
              </Col>
              <Col className="my-5">
                <div className="fs-4 fw-bold">Contact</div> +66 097-217-5550
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default contact;
