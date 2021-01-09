import React from "react";
import Container from "react-bootstrap/Container";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faGithub, faInstagram, faEnvelope);

const Footer = () => {
  return (
    <Container style={{ textAlign: "center"}}>
      <a
        href="https://github.com/j769chen"
        target="_blank"
        rel="noreferrer"
        id="footerLinks"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>

      <a
        href="https://www.linkedin.com/in/james23chen/"
        target="_blank"
        rel="noreferrer"
        id="footerLinks"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>

      <a
        href="mailto:james.chen5@carleton.ca"
        target="_blank"
        rel="noreferrer"
        id="footerLinks"
      >
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>

      <a
        href="https://www.instagram.com/jchen27_/"
        target="_blank"
        rel="noreferrer"
        id="footerLinks"
      >
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
    </Container>
  );
};

export default Footer;
