import React from "react";
import NavBar from "../NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Dutchie from "../../elements/Dutchie.jpg";
import Dutchie2 from "../../elements/Dutchie2.jpg";
import Dutchie3 from "../../elements/Dutchie3.jpg";
import Carousel from "react-bootstrap/Carousel";

function about() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col className="mt-2">
            <h5>ABOUT</h5>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="px-md-0" xs={12} md={3}>
            <Carousel className="ms-md-3">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Dutchie}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Dutchie2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Dutchie3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="mt-md-0 mt-3 mx-3 ms-md-5">
            <Row>
              Focused and enthusiastic developer with a keen interest in
              software development and artificial intelligence. By comprehensive
              exposure to the underlying concepts and applying them vividly to
              various projects, my love for these domains came into being. I am
              a passionate individual who thrives to build and apply algorithms
              to solve real-world industry problems.
            </Row>
            <Row className="mt-5">
              <Col>
                <Row>
                  <Card body>
                    <span style={{ display: "flex" }}>
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                      <span>
                        <span className="fw-semibold">Birthday</span>: 14 April
                        2003
                      </span>
                    </span>
                  </Card>
                </Row>
                <Row>
                  <Card body>
                    <span style={{ display: "flex" }}>
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                      <span>
                        <span className="fw-semibold">City</span>: Bangkok,
                        Thailand
                      </span>
                    </span>
                  </Card>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Card body>
                    <span style={{ display: "flex" }}>
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                      <span>
                        <span className="fw-semibold">Phone</span>: +66
                        097-217-5550
                      </span>
                    </span>
                  </Card>
                </Row>
                <Row>
                  <Card body>
                    <span style={{ display: "flex" }}>
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                      <span>
                        <span className="fw-semibold">Email</span> :
                        Dutchie2546@gmail.com
                      </span>
                    </span>
                  </Card>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <h5>INTERESTS</h5>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12} md={4}>
            <Card body className="bg-light">
              <span style={{ display: "flex" }}>
                <span class="material-symbols-outlined">code</span>
                <span className="ms-2">Front-End Development</span>
              </span>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card body className="bg-light">
              <span style={{ display: "flex" }}>
                <span class="material-symbols-outlined">data_object</span>
                <span className="ms-2">Back-End Development</span>
              </span>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card body className="bg-light">
              <span style={{ display: "flex" }}>
                <span class="material-symbols-outlined">monitoring</span>
                <span className="ms-2">Visualization</span>
              </span>
            </Card>
          </Col>
        </Row>
        <Row className="mt-md-4">
          <Col xs={12} md={4}>
            <Card body className="bg-light">
              <span style={{ display: "flex" }}>
                <span class="material-symbols-outlined">code_blocks</span>
                <span className="ms-2">UX-UI Design</span>
              </span>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default about;
