import * as React from "react";

import Navigation from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import HighlightCard from "../Components/HighlightCard.js";
import LeagueData from "../images/LeagueData.jpg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { SummaryAnimation } from "../Animations.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faJava,
  faPython,
  faGithub,
  faHtml5,
  faReact,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

library.add(faJava, faPython, faGithub, faHtml5, faReact);

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
          <HighlightCard
            title={"LoL Data Analysis"}
            bodyText={
              "An app written in Python that uses the Riot API to query a user's recent League of Legends match history, comparing their stats to players of a similar ELO, and providing insight as to how the user can improve their gameplay."
            }
            image={LeagueData}
            icons={[faPython, faGit]}
          />
        </SummaryAnimation>
      </Container>
      <br />
      <Footer />
    </main>
  );
};

export default projects;
