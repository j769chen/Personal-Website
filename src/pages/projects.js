import * as React from "react";

import Navigation from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import HighlightCard from "../Components/HighlightCard.js";
import LeagueData from "../images/LeagueData.jpg";
import FlappyBird from "../images/FlappyBird.jpg";
import Website from "../images/Website.jpg";

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
  faJs,
  faCss3,
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
            repo={"League-Data-Analysis"}
          />
          <br />
          <HighlightCard
            title={"Flappy Bird"}
            bodyText={
              "Flappy Bird game made in Java with JavaFX GUI library. This project was made with object-oriented programming principles in mind, e.g. encapsulation and polymorphism, and to apply them in a practical scenario."
            }
            image={FlappyBird}
            icons={[faJava, faGit]}
            repo={"FlappyBird"}
          />
          <br />
          <HighlightCard
            title={"Personal Website"}
            bodyText={
              "Personal portfolio website with info about me, some of my projects, and more! Developed in part to get more comfortable with React.js and front-end development as a whole."
            }
            image={Website}
            icons={[faReact, faJs, faHtml5, faCss3]}
            repo={"Personal-Website-2021"}
          />
        </SummaryAnimation>
      </Container>
      <br />
      <Footer />
      <br />
    </main>
  );
};

export default projects;
