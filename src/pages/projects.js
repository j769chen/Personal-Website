import * as React from "react";

import Navigation from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import HighlightCard from "../Components/HighlightCard.js";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { SummaryAnimation } from "../Animations.js";

const projects = () => {
  return (
    <main>
      <Container fluid>
        <Navigation />
      </Container>

      <Container>
        <SummaryAnimation>
          <h2>Projects</h2>
          <br />
          <HighlightCard />
        </SummaryAnimation>
      </Container>
      <br />
      <Footer />
    </main>
  );
};

export default projects;
