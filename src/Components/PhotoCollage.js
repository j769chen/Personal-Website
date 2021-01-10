import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Jason from "../images/Jason.jpg";
import Prom1 from "../images/Prom1.jpg";
import ReadyStance from "../images/ReadyStance.jpg";
import Prom2 from "../images/Prom2.jpg";
import Smash from "../images/Smash.jpg";
import EngHack from "../images/EngHack.jpg";
import HackTheNorth from "../images/HackTheNorth.jpg";
import Medals from "../images/Medals.jpg";

const PhotoCollage = () => {
  return (
    <Container style={{marginTop: "100px"}}>
      <Row>
        <Col>
          <Image className="collageImg" src={Jason} />
        </Col>
        <Col>
          <Image className="collageImg" src={Prom1} />
        </Col>
        <Col>
          <Image className="collageImg" src={ReadyStance} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Image className="collageImg" src={Prom2} />
        </Col>
        <Col>
          <Image className="collageImg" src={Smash} />
        </Col>
        <Col>
          <Image className="collageImg" src={EngHack} />
        </Col>
      </Row>
      <br />
      <Row>
      <Col>
          <Image className="collageImg" src={Medals} />
        </Col>
        <Col>
          <Image className="collageImg" src={HackTheNorth} />
        </Col>
      </Row>
    </Container>
  );
};

export default PhotoCollage;
