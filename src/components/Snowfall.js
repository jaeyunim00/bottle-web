import React from "react";
import styled from "styled-components";

const Snowfall = ({ count }) => {
  return (
    <SnowfallContainer>
      {[...Array(count)].map((_, i) => (
        <Snowflake key={i} />
      ))}
    </SnowfallContainer>
  );
};

const SnowfallContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const Snowflake = styled.div`
  z-index: 100;
  position: absolute;
  background: #abcaef;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  animation: fall linear infinite;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-delay: ${() => `-${Math.random() * 10}s`};
  left: ${() => `${Math.random() * 100}%`}; /* 랜덤한 가로 위치 설정 */

  @keyframes fall {
    0% {
      opacity: 1;
      transform: translateY(-10px);
    }
    100% {
      opaticy: 0;
      transform: translateY(110vh);
    }
  }
`;

export default Snowfall;
