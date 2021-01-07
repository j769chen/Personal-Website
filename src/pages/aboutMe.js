import * as React from "react";

const aboutMePage = () => {
  return (
    <main>
      <p>
        I'm a former mechanical engineering student from the University of
        Waterloo, but as of Fall 2020, I've transferred to Carleton University
        for computer science. During my time at UW, I attended various
        hack-a-thons, most notably{" "}
        <span style={{ color: "#87ceeb" }}>Hack the North 2019</span>, and had
        the opportunity to co-op at Raven Telemetry, which helped me to discover
        my passion for software development.
      </p>
      <p>
        I have always enjoyed learning, and I love to create. Whenever I can, I
        enjoy experimenting with new technologies and using code to develop cool
        software projects. I am currently working on{" "}
        <a href={"https://lolsketch.com/"}>LOL Sketch</a>, a free multiplayer
        drawing and guessing game for League of Legends, and some of my past
        projects include a <span>Flappy Bird</span> game, and a Web App which
        displays the current <span>Badminton World Rankings</span> using Python
        &amp; Flask to name a few. Feel free to check out my{" "}
        <a href={"https://github.com/j769chen"}>Github</a> to see more of the
        stuff that I've worked on!
      </p>
      <p>
        In my free time (outside of coding), I enjoy playing badminton,
        fitness/powerlifting, and playing violin.
      </p>
    </main>
  );
};

export default aboutMePage;
