import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faPython,
  faGithub,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

library.add(faJava, faPython, faGithub, faHtml5, faReact);

const HighlightCard = (props) => {
  return (
    <Container
      className="highlight"
      style={{
        color: props.color,
        borderColor: "black",
      }}
    >
      <Row>
        <Col xs={8}>
          <h3>{props.title}</h3>
          <div></div>
          <p>{props.bodyText}</p>
        </Col>
        <Col>
          <Image src={`url(${props.backgroundImage})`} alt="Background" />
        </Col>
      </Row>
    </Container>
  );
};

export default HighlightCard;
