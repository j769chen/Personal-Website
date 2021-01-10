import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

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

function getIcons(icons) {
  var faIcons = [];

  for (var i = 0; i < icons.length; i++) {
    faIcons.push(
      <FontAwesomeIcon
        icon={icons[i]}
        size="lg"
        style={{ marginLeft: "6px" }}
      />
    );
  }
  return faIcons;
}

function getGithubLink(repo) {
  var baseLink = "https://github.com/j769chen/";

  return baseLink + repo;
}

const HighlightCard = (props) => {
  return (
    <Container
      className="highlight"
      style={{
        color: props.color,
        borderColor: "black",
        padding: "40px",
      }}
    >
      <Row>
        <Col xs={8}>
          <h3>{props.title}</h3>
          <div>{getIcons(props.icons)}</div>
          <p style={{ fontSize: "14px" }}>{props.bodyText}</p>
          <Button
            variant=""
            href={getGithubLink(props.repo)}
            target="_blank"
            style={{ backgroundColor: "#cccccc" }}
          >
            View on&nbsp; <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Col>
        <Col>
          <Image
            src={props.image}
            alt="Background"
            style={{ marginTop: "20px", marginLeft: "20px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HighlightCard;
