import React from "react";
import NavBar from "../NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import HTML from "../../elements/icon/html.jpg";
import CSS from "../../elements/icon/CSS.jpg";
import JavaScript from "../../elements/icon/JavaScript.jpg";
import ReactIcon from "../../elements/icon/React-icon.jpg";
import Git from "../../elements/icon/Git.jpg";
import Bootstrap from "../../elements/icon/Bootstrap.jpg";
import Jupyter from "../../elements/icon/jupyter.jpg";
import MongoDB from "../../elements/icon/MongoDB.jpg";
import MySQL from "../../elements/icon/mySQL.jpg";
import NodeJS from "../../elements/icon/nodeJS.jpg";
import Image from "react-bootstrap/Image";

function skills() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row className="mt-2">
          <h5>SKILLS</h5>
        </Row>
        <Row>
          <Row>
            <Col>
              <Card>
                <Card.Title className="mx-auto mx-md-3 my-3">
                  Languages and Databases
                </Card.Title>
                <Row className="h-50 mb-md-4">
                  <Col
                    md={2}
                    xs={12}
                    className="d-flex justify-content-center my-3 mx-md-3"
                  >
                    <Image
                      src={HTML}
                      rounded
                      className="w-auto"
                      style={{ height: "4rem" }}
                    />
                  </Col>
                  <Col
                    md={2}
                    xs={12}
                    className="d-flex justify-content-center my-3 mx-md-3"
                  >
                    <Image
                      src={CSS}
                      rounded
                      className="w-auto"
                      style={{ height: "4rem" }}
                    />
                  </Col>
                  <Col
                    md={2}
                    xs={12}
                    className="d-flex justify-content-center my-3 mx-md-3"
                  >
                    <Image
                      src={JavaScript}
                      rounded
                      className="w-auto"
                      style={{ height: "4rem" }}
                    />
                  </Col>
                  <Col
                    md={2}
                    xs={12}
                    className="d-flex justify-content-center my-3 mx-md-3"
                  >
                    <Image
                      src={MySQL}
                      rounded
                      className="w-auto"
                      style={{ height: "4rem" }}
                    />
                  </Col>
                  <Col
                    md={2}
                    xs={12}
                    className="d-flex justify-content-center my-3 mx-md-3"
                  >
                    <Image
                      src={MongoDB}
                      rounded
                      className="w-auto"
                      style={{ height: "4rem" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Title className="mx-auto mx-md-3 my-3">
                  Frameworks
                </Card.Title>
                <Row className="h-50 mb-md-4">
                  <Col
                    md={2}
                    xs={12}
                    className="d-flex justify-content-center my-3 mx-md-3"
                  >
                    <Image
                      src={ReactIcon}
                      rounded
                      className="w-auto"
                      style={{ height: "4rem" }}
                    />
                  </Col>
                  <Col
                    md={2}
                    xs={12}
                    className="d-flex justify-content-center my-3 mx-md-3"
                  >
                    <Image
                      src={Bootstrap}
                      rounded
                      className="w-auto"
                      style={{ height: "4rem" }}
                    />
                  </Col>
                  <Col
                    md={2}
                    xs={12}
                    className="d-flex justify-content-center my-3 mx-md-3"
                  >
                    <Image
                      src={NodeJS}
                      rounded
                      className="w-auto"
                      style={{ height: "4rem" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row className="w-100">
            <Col>
              <Card>
                <Card.Title className="mx-auto mx-md-3 my-3">Tools</Card.Title>
                <Row className="h-50 mb-md-4">
                  <Col
                    md={2}
                    xs={12}
                    className="d-flex justify-content-center my-3 mx-md-3"
                  >
                    <Image
                      src={Git}
                      rounded
                      className="w-auto"
                      style={{ height: "4rem" }}
                    />
                  </Col>
                  <Col
                    md={2}
                    xs={12}
                    className="d-flex justify-content-center my-3 mx-md-3"
                  >
                    <Image
                      src={Jupyter}
                      rounded
                      className="w-auto"
                      style={{ height: "4rem" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default skills;
