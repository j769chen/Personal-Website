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
        <p>I'm James, nice to meet you!</p>
        <p>Here's a little bit about me:</p>

        <h5>
          <Badge variant="danger">Location</Badge>
          {" Ottawa, Ontario "}
        </h5>
        <br></br>
        <h5>
          <Badge variant="primary">Education</Badge>
          {" Bachelor of Computer Science, Carleton University "}
        </h5>
        <br></br>
        <h5>
          <Badge variant="success">Skills</Badge>
          {" React, Python, Java, JavaScript, C, C++, HTML/CSS "}
        </h5>
        <br></br>
        <h5>
          <Badge variant="info">Interests</Badge>
          {" Badminton, Fitness/Powerlifting, Cooking, Violin "}
        </h5>
        <br></br>
        <p>
          I'm super passionate about using software to build cool stuff.
          Checkout my <a href="https://github.com/j769chen">Github</a> to see
          some of the projects that I've worked on.
        </p>
        <p>
          If you want to chat, feel free to reach out to me on{" "}
          <a href="https://www.linkedin.com/in/james23chen/">LinkedIn</a>!
        </p>
      </SummaryAnimation>
    </Container>
  );
};

export default Summary;
