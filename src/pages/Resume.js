import React from "react";

// import react-bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function Resume() {
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>
              Skills <span>&amp;</span> Experience
            </h1>
          </div>
        </Container>
      </Jumbotron>

      <Container className="py-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
        <Button
          href="https://docs.google.com/document/d/e/2PACX-1vTt6YKWn4AIz3M4XknzKe2N-XYnEzFHPxnYLvvtbFKut-Mt3qA1q7ai56JCCjonRkcKCutzmC37MdkW/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume
        </Button>
      </Container>

      <Container>
        <CardDeck className="resumeContainer">
          <Card className="resumeCard">
            <Card.Body>
              <h3>Frontend Tech</h3>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap, Materialize, UIKit, Bulma</li>
                <li>jQuery</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="resumeCard">
            <Card.Body>
              <h3>Backend Tech</h3>
              <ul>
                <li>Python</li>
                <li>SQL</li>
                <li>APIs</li>
                <li>REST</li>
                <li>MongoDB, Mongoose</li>
                <li>MySQL, Sequelize</li>
                <li>Express</li>
                <li>Node</li>
                <li>GraphQL</li>
                <li>Django</li>
              </ul>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
}

export default Resume;
