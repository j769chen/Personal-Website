import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { SummaryAnimation } from "../Animations.js";
import HighlightCard from "./HighlightCard.js";
import Raven from "../images/Raven-Telemetry.jpg";
import ECCC from "../images/ECCC.jpg";

const Highlights = () => {
  return (
    <Container fluid>
      <SummaryAnimation>
        <h3 style={{ marginTop: "2%" }}>Highlights</h3>
        <p>Here are some of my experiences:</p>
      </SummaryAnimation>
      <SummaryAnimation>
        <Row>
          <HighlightCard
            company={"Raven Telemetry"}
            title={"Data Engineer"}
            backgroundImage={Raven}
            color={"white"}
          />
        </Row>
        <br />
        <Row>
          <HighlightCard
            company={"Environment Canada"}
            title={"Web Developer"}
            backgroundImage={ECCC}
            color={"black"}
          />
        </Row>
      </SummaryAnimation>
    </Container>
  );
};

export default Highlights;
