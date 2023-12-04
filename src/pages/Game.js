import Navigation from "../components/Navigation";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

function Game() {
  return (
    <Wrapped>
      <Navigation></Navigation>
      <iframe
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        title="Game"
        src={`/game/indexx.html`}
        width="1400"
        height="900"
      />
    </Wrapped>
  );
}

const Wrapped = styled.div`
  // background-color: black;
  height: 100vh;
  // width: 100vw;
`;

export default Game;
