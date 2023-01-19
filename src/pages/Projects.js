import React from "react";

// import react-bootstrap components
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import custom components
import Project from "../components/Project";

// import images for apps
import PasswordGenerator from "../assets/image/Password-Generator.png";
import Workdayscheduler from "../assets/image/work-day-schedule.png";
import WeatherDashboard from "../assets/image/Weather-Dashboard.png";
import Zero2Rusme from "../assets/image/Zero-2-Rusme.png";
import Thrive2Survive from "../assets/image/Thrive2Survive.png";
import CovidApp from "../assets/image/Covid-App.png";

function Projects() {
  const projects = [
    {
      title: "Thrive2Survive",
      description: "A Donation App from homeless People",
      Tools: "React, Bootstrap, JavaScript, HTML, CSS, GoogleFonts",
      key: "Thrive2Survive",
      imageSrc: Thrive2Survive,
      repository: "https://github.com/alisradwan/Thrive2Survive",
      deployed_app: "https://alisradwan.github.io/Thrive2Survive/",
    },
    {
      title: "Zero-2-Resume",
      description: "A full-stack app for building a Resume",
      Tools:
        "HTML, CSS, JavaScript, Bootstrap, GoogleFonts, Photoshop, bulma, Express",
      key: "Zero-2-Resume",
      imageSrc: Zero2Rusme,
      repository: "https://github.com/AramA89/Zero-2-Resume",
      deployed_app: "https://zero-2-resume.herokuapp.com/",
    },
    {
      title: "COVID-19 APP",
      description: "A frontend app for cases in US centers",
      Tools: "HTML, CSS, Bootstrap, JavaScript, API",
      key: "covid-datahub",
      imageSrc: CovidApp,
      repository: "https://github.com/alisradwan/COVID-APP",
      deployed_app: "https://alisradwan.github.io/COVID-APP/",
    },
    {
      title: "Weather Dashboard",
      description: "A basic Weather Dashboard app for checking the weather",
      Tools:
        "HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome, Photoshop",
      key: "Weather-Dashboardr",
      imageSrc: WeatherDashboard,
      repository: "https://github.com/alisradwan/Weather-Dashboard",
      deployed_app: "https://alisradwan.github.io/Weather-Dashboard/",
    },
    {
      title: "Work day schedule",
      description: "A Work day schedule app ",
      Tools:
        "HTML, CSS, JavaScript, jQuery, Bootstrap, Font Awesome, Photoshop",
      key: "Work-day-schedule",
      imageSrc: Workdayscheduler,
      repository: "https://github.com/alisradwan/Work-day-scheduler",
      deployed_app: "https://alisradwan.github.io/Work-day-scheduler/",
    },
    {
      title: "Password Generator",
      description: "A Password Generator to Create a Quick password for you",
      Tools: "HTML, CSS, JavaScript",
      key: "Password-Generator",
      imageSrc: PasswordGenerator,
      repository: "https://github.com/alisradwan/Password-Generator",
      deployed_app: "https://alisradwan.github.io/Password-Generator/",
    },
  ];
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Recent Projects</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container className="p-3">
        <Row>
          {projects.map((project) => {
            return (
              <Col s={12} lg={6} key={project.key}>
                <Project project={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Projects;
