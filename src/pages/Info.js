import React, { useEffect, useRef, useState } from "react";

import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// COMPONENTS
import Snowfall from "../components/Snowfall";
import Navigation from "../components/Navigation";

//SECTIONS
import TopicSection from "../section/TopicSection";
import IndexSection from "../section/IndexSection";
import GptSection from "../section/GptSection";
import Co2Section from "../section/Co2Section";
import IceSection from "../section/IceSection";
import InfoSection from "../section/InfoSection";

function Info() {
  return (
    <Wrapped>
      {/* <Snowfall count={50} z-index={100}></Snowfall> */}
      <Navigation></Navigation>
      <InfoSection></InfoSection>
      <IndexSection></IndexSection>
      {/* <IceSection></IceSection> */}
      <TopicSection></TopicSection>
      <GptSection></GptSection>
      {/* <Co2Section></Co2Section> */}
    </Wrapped>
  );
}

const Wrapped = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  background-color: #f5f5f7;
`;

export default Info;
