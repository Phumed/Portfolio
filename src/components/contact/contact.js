import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "../NavBar";

function contact() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row className="mt-2">
          <h5>CONTACT</h5>
        </Row>
        <Row className="mt-2">
          <Col className="mb-4" xs={12} md={6}>
            <Row className="bg-light me-md-4 h-100 mx-md-0 mx-1">
              <Col
                xs={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className="rounded-circle bg-secondary-subtle"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span class="material-symbols-outlined">location_on</span>
                </div>
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
                <div
                  className="rounded-circle bg-secondary-subtle"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span class="material-symbols-outlined">share</span>
                </div>
              </Col>
              <Col className="my-5">
                <div className="fs-4 fw-bold mb-2">Social Profiles</div>

                <div>
                  <a href="https://www.linkedin.com/in/phumed-thumtechanon-097022289/">
                    <img
                      src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
                      alt="linkedIn"
                      style={{ width: "2rem" }}
                      className="me-3"
                    />
                  </a>
                  <a href="https://github.com/Phumed">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                      alt="GitHub"
                      style={{ width: "2rem" }}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <Row className="bg-light me-md-4 h-100 mx-md-0 mx-1">
              <Col
                xs={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className="rounded-circle bg-secondary-subtle"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span class="material-symbols-outlined">mail</span>
                </div>
              </Col>
              <Col className="my-5">
                <div className="fs-4 fw-bold">Email</div>{" "}
                <a href="mailto:phumed.thumtechanon@gmail.com">
                  phumed.thumtechanon@gmail.com
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Row className="bg-light h-100 mx-md-0 mx-1">
              <Col
                xs={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className="rounded-circle bg-secondary-subtle"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span class="material-symbols-outlined">call</span>
                </div>
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
