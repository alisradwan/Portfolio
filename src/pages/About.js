import React from "react";

// import react-bootstrap components
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <>
      <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4} className="justify-content-center">
              <Image
                src={require("../assets/image/Ali_Radwan.png")}
                thumbnail
                width="300vw"
                height="300vw"
              />
            </Col>
            <Col className="pl-md-5">
              <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
                Hello, World!
              </h1>
              <p className="text-dark text-center text-md-left h4">
                I'm Ali Radwan, a full-stack developer based in Vancouver, Wa.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <h3>About Me</h3>
          <p>
            I am a student at UCLA Extension studying Web Development and
            Coding.
          </p>
          <p>
            While in school I also work part time at Metro by T Mobile as a
            Sales Representative. My resume provides context to my ability to
            stay at one profession for a long period of time, demonstrating my
            loyalty to the companies.
          </p>
          <p>
            When I'm not in front of a screen, you might find me eating, making
            out, or spending time with friends and family.
          </p>
        </Container>
      </Container>
    </>
  );
}

export default About;
