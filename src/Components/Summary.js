import React from "react";

import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import { SummaryAnimation } from "../Animations.js";

const Summary = () => {
  return (
    <Container>
      <SummaryAnimation>
        <h1>Hey There,</h1>
        <div>I'm James, nice to meet you!</div>
        <p>Here's a little bit about me:</p>
        <div style={{ marginLeft: "1%" }}>
          <p>
            <Badge variant="danger" style={{ filter: "grayscale(20%)", backgroundColor: "#0099CC" }}>
              Most Recent Position
            </Badge>
            {" Data Engineer @ Raven Telemetry "}
          </p>

          <p>
            <Badge variant="primary" style={{ filter: "grayscale(20%)", backgroundColor: "#e0305a" }}>
              Education
            </Badge>
            {" Bachelor of Computer Science, Carleton University "}
          </p>

          <p>
            <Badge variant="danger" style={{ filter: "grayscale(20%)", backgroundColor: "#66CCFF" }}>
              Skills
            </Badge>
            {" React, Python, Java, JavaScript, C, C++, HTML/CSS "}
          </p>

          <p>
            <Badge variant="info" style={{ filter: "grayscale(20%)", backgroundColor: "#996699" }}>
              Interests
            </Badge>
            {" Badminton, Fitness/Powerlifting, Cooking, Violin "}
          </p>
        </div>
        <p>
          I'm super passionate about using software to build cool stuff. Check
          out my <a href="https://github.com/j769chen">Github</a> to see some of
          the projects that I've worked on!
        </p>
        <p>
          If you want to chat, feel free to email me at{" "}
          <a href="mailto:james.chen5@carleton.ca">james.chen5@carleton.ca</a>,
          or reach out on{" "}
          <a href="https://www.linkedin.com/in/james23chen/">LinkedIn</a>!
        </p>
      </SummaryAnimation>
    </Container>
  );
};

export default Summary;
