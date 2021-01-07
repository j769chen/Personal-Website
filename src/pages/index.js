import * as React from "react";
import Navigation from "../Components/Navbar.js";
import Summary from "../Components/Summary.js";

import "../App.css";
import headshot from "../images/Headshot.jpg";
import { SummaryAnimation } from "../Animations.js";
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
        <Row style={{ width: "1162px" }}>
          <Col xs={7}>
            <Summary />
          </Col>
          <Col>
            <SummaryAnimation>
              <Image
                src={headshot}
                alt="headshot"
                rounded
                style={{ marginTop: "5%" }}
              />
            </SummaryAnimation>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IndexPage;
