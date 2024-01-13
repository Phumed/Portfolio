import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Codecademy from "../../elements/codecademy.jpg";
import Mahidol from "../../elements/mahidol.jpg";
import NavBar from "../NavBar";

function education() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row className="mt-2">
          <Col>
            <h5>EDUCATION</h5>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12} md={5}>
            <Card>
              <Card.Img variant="top" src={Mahidol} className="px-4 mt-3" />
              <Card.Body className="bg-light">
                <Card.Text>
                  Department of Computer Engineering,
                  <div>Faculty of Engineering</div>
                </Card.Text>
                <Card.Title> August 2021 - Present</Card.Title>
                <Card.Text>Expected to graduate in: June 2025</Card.Text>
                <Card.Text>
                  <div className="fw-semibold fs-5">Relevant Coursework</div>
                  <div>
                    <ul className="fs-6">
                      <li>Computer Programming</li>
                      <li>Programming Paradigm</li>
                      <li>Data Structure</li>
                      <li>Data Visualization</li>
                      <li>DataBase</li>
                      <li>Software Design</li>
                      <li>Web programming</li>
                    </ul>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={7}></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h5>ONLINE COURSE</h5>
          </Col>
        </Row>
        <Row className="mb-5 mt-2">
          <Col xs={12} md={4} className="mb-3">
            <Card className="w-100">
              <Card.Img variant="top" src={Codecademy} className="px-4 my-3" />
              <Card.Body className="bg-light">
                <Card.Title>Front-End Engineer</Card.Title>
                <Card.Text>
                  <div>Includes</div>
                  <div>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Front-End</li>
                      <li>Web Apps</li>
                      <li>React</li>
                      <li>Redux</li>
                      <li>more</li>
                    </ul>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="w-100 h-100">
              <Card.Img variant="top" src={Codecademy} className="px-4 my-3" />
              <Card.Body className="bg-light">
                <Card.Title>Bootstrap</Card.Title>
                <Card.Text>front-end frameworks</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default education;
