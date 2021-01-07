import React from "react";
import Container from "react-bootstrap/Container";

const HighlightCard = (props) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        borderRadius: "5px",
        backgroundSize: "cover",
        color: props.color,
        borderColor: "black",
      }}
    >
      <h3 style={{ marginTop: "20%" }}>{props.company}</h3>
      <p>{props.title}</p>
    </Container>
  );
};

export default HighlightCard;
