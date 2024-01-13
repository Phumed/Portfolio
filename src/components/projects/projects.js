import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "../NavBar";

function projects() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row className="mt-2 border-bottom border-secondary">
          <h5>PROJECTS</h5>
        </Row>
        <Row>
          <h6 className="mt-4 mb-2">WEB PROJECTS</h6>
        </Row>
        <Row className="mt-2 mb-2">
          <Col xs={12} md={4} className="mb-md-0 mb-3">
            <Card style={{ width: "100%" }} className="h-100">
              <Card.Body>
                <Card.Title>Personal Portfolio</Card.Title>
                <Card.Text>
                  This web application employs React Router for seamless
                  multipage navigation and features a responsive design crafted
                  with CSS and the Bootstrap framework. This ensures an optimal
                  user experience across various devices and screen sizes.
                </Card.Text>
                <Card.Link href="#">Github</Card.Link>
                <Card.Link href="#">Web</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-md-0 mb-3">
            <Card style={{ width: "100%" }} className="h-100">
              <Card.Body>
                <Card.Title>Jammming</Card.Title>
                <Card.Text>
                  This web application utilizes the Spotify API to fetch
                  top-track music, allowing users to filter results by artist
                  name. Users can add and remove music from playlists, and name
                  playlists. State management is handled with React Hooks, while
                  responsive design is achieved through CSS and Bootstrap for an
                  optimal user experience.
                </Card.Text>
                <Card.Link
                  href="https://github.com/Phumed/Jammming.git"
                  target="_blank"
                >
                  Github
                </Card.Link>
                <Card.Link
                  href="https://jammming-ory0.onrender.com"
                  target="_blank"
                >
                  Web
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-md-0 mb-3">
            <Card style={{ width: "100%", height: "100%" }} className="h-100">
              <Card.Body>
                <Card.Title>Entertainment Web App</Card.Title>
                <Card.Text>
                  This multi-page web application showcases movies and series,
                  with filtering capabilities by pages. Users can add or remove
                  items to/from bookmarks. State management is achieved through
                  React-Redux (Redux Toolkit), and the design is implemented
                  with responsiveness in mind using CSS and the Bootstrap
                  framework
                </Card.Text>
                <Card.Link
                  href="https://github.com/Phumed/Entertainment.git"
                  target="_blank"
                >
                  Github
                </Card.Link>
                <Card.Link
                  href="https://entertainment-4df5.onrender.com"
                  target="_blank"
                >
                  Web
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={12} md={4} className="mb-md-0 mb-3">
            <Card style={{ width: "100%", height: "100%" }} className="h-100">
              <Card.Body>
                <Card.Title>Facebook Clone</Card.Title>
                <Card.Text>
                  This React web app replicates the Facebook interface using CSS
                  and the Tailwind CSS framework for streamlined styling and
                  dynamic component rendering.
                </Card.Text>
                <Card.Link
                  href="https://github.com/Phumed/facebook_clone.git"
                  target="_blank"
                >
                  Github
                </Card.Link>
                <Card.Link href="#">Web</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <h6 className="mt-3 mb-2">JAVA PROJECTS</h6>
        </Row>
        <Row className="mt-2 mb-5">
          <Col xs={12} md={4} className="mb-md-0 mb-3">
            <Card style={{ width: "100%", height: "100%" }} className="h-100">
              <Card.Body>
                <Card.Title>Cooking Game</Card.Title>
                <Card.Text>
                  This Project is to serve a food to many customers as much as
                  possible on the time that game determined This Cooking game
                  project I have learned about OOP( Object-Oriented Programs),
                  data structure, multiThread and UI design.
                </Card.Text>
                <Card.Link
                  href="https://github.com/Phumed/Cooking-Game.git"
                  target="_blank"
                >
                  Github
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default projects;
