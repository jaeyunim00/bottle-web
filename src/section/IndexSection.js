import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";
import { BiChevronsDown } from "react-icons/bi";

import { useState, useEffect } from "react";

function IndexSection() {
  const IndexVariants = {
    start: {
      opacity: 0,
      top: "50%",
      left: "50%",
    },
    end: {
      opacity: 1,
      transition: {
        duration: 2,
        bounce: 0.5,
        delayChildren: 1,
        staggerChildren: 1,
      },
    },
  };

  const subVariants = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -2, 2, 0], // 원의 수직 위치를 애니메이션화
      transition: {
        ease: easeInOut,
        y: {
          repeat: Infinity, // 무한반복
          duration: 3, // 애니메이션 지속 시간
        },
      },
    },
  };

  return (
    <Wrapped>
      <Youtube>
        <YoutubeArea>
          <Iframe
            src="https://www.youtube.com/embed/Kv9v9ALV3yk?autoplay=1&mute=1&start=0&end=70&controls=0&loop=1&playlist=Kv9v9ALV3yk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></Iframe>
        </YoutubeArea>
        <YoutubeCover></YoutubeCover>
        <Message variants={IndexVariants} initial="start" animate="end">
          <motion.div variants={subVariants}>Lorem Ipsume</motion.div>
          <motion.div variants={subVariants}>dolar sit ament</motion.div>
        </Message>
      </Youtube>
      <Ment variants={floatingVariants} initial="float" animate="float">
        <div>- Co2와 지구온난화, 그린란드는 녹고있습니다 -</div>
        <BiChevronsDown className="icon"></BiChevronsDown>
      </Ment>
    </Wrapped>
  );
}

const Wrapped = styled.div`
  height: 100vh;
`;

const Youtube = styled.div`
  position: relative;
  height: 80vh;
  background-color: #333;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const YoutubeArea = styled.div`
  width: 1920px;
  background-color: orange;
  position: absolute;

  left: 50%;
  margin-left: calc(1920px / -2);
  top: 50%;
  margin-top: calc(1920px * 9 / 16 / -2);

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
  }
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const YoutubeCover = styled.div`
  background-image: url(/assets/video_cover_pattern.png);
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Message = styled(motion.div)`
  font-weight: 400;
  color: #f5f5f5;
  background-color: none;
  transform: translate(-50%, -50%);
  position: absolute;
  & div:first-child {
    font-size: 64px;
    margin-bottom: 30px;
  }
  & div:last-child {
    font-size: 30px;
    position: absolute;
    hegiht: 300px;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Smoke = styled.img`
  position: absolute;
  top: 40%;
  left: -20%;
  width: 130%;
  object-fit: cover;
`;

const Ment = styled(motion.div)`
  height: calc(20vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 80px;

  & .icon {
    font-size: 40px;
    margin-left: 5px;
  }
`;

export default IndexSection;
