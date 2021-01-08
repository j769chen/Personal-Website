import * as React from "react";

import Navigation from "../Components/Navbar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Footer from "../Components/Footer.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faCodeBranch,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SummaryAnimation, ListAnimation } from "../Animations.js";

library.add(faCode, faCodeBranch);
const aboutMePage = () => {
  return (
    <main>
      <Container fluid>
        <Navigation />
      </Container>

      <Container>
        <SummaryAnimation>
          <Row>
            <Col xs={8}>
              <h2>About Me</h2>
              <p>
                I'm a former mechanical engineering student from the University
                of Waterloo, but as of Fall 2020, I've transferred to Carleton
                University for computer science. During my time at UW, I
                attended various hack-a-thons, most notably{" "}
                <span style={{ color: "#87ceeb" }}>Hack the North 2019</span>,
                and had the opportunity to co-op at Raven Telemetry, which
                helped me to discover my passion for software development.
              </p>
              <p>
                I have always enjoyed learning, and I love to create. Whenever I
                can, I enjoy experimenting with new technologies and using code
                to develop cool software projects. I am currently working on{" "}
                <a href={"https://lolsketch.com/"}>LOL Sketch</a>, a free
                multiplayer drawing and guessing game for League of Legends, and
                some of my past projects include a <span>Flappy Bird</span>{" "}
                game, and a Web App which displays the current{" "}
                <span>Badminton World Rankings</span> using Python &amp; Flask
                to name a few. Feel free to check out my{" "}
                <a href={"https://github.com/j769chen"}>Github</a> to see more
                of the stuff that I've worked on!
              </p>
              <p>
                In my free time (outside of coding), I enjoy playing badminton,
                fitness/powerlifting, and playing violin.
              </p>
            </Col>
            <Col></Col>
          </Row>

          <h2>My Skills</h2>
        </SummaryAnimation>
        <br />
        <ListAnimation>
          <Row>
            <Col>
              <h4>
                Languages <FontAwesomeIcon icon={faCode} />
              </h4>

              <div>Python</div>
              <div>Java</div>
              <div>JavaScript</div>
              <div>C/C++</div>
            </Col>
            <Col>
              <h4>
                Frameworks <FontAwesomeIcon icon={faFileCode} />
              </h4>

              <div>React.js</div>
              <div>Bootstrap</div>
              <div>jQuery</div>
              <div>Flask</div>
              <div>Pandas</div>
              <div>BeautifulSoup4</div>
            </Col>
            <Col>
              <h4>
                Tools <FontAwesomeIcon icon={faCodeBranch} />
              </h4>
              <div>Git</div>
              <div>Firebase</div>
              <div>Linux</div>
              <div>HTML/CSS</div>
            </Col>
          </Row>
        </ListAnimation>
        <br />
        <Footer />
      </Container>
    </main>
  );
};

export default aboutMePage;
