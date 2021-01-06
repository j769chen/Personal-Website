import * as React from "react";
import Navigation from "../Components/Navbar";

import "../App.css";
import headshot from "../images/Headshot.jpg"
import { TitleAnimation, SubTitleAnimation } from "../Animations.js";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const IndexPage = () => {
  return (
    <main>
      <Container fluid>
        <Navigation />
      </Container>

      <Container>
        <Row>
          <Col>
            <TitleAnimation>
              <h1>Hey There,</h1>
            </TitleAnimation>
            <SubTitleAnimation>
              <p>I'm James, nice to meet you!</p>
            </SubTitleAnimation>
            <Image src={headshot} alt="headshot"></Image>
          </Col>
          <Col>
            <div>test</div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IndexPage;
