import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
  height: 150vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80vw;
  gap: 20px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const MainMsg = styled(motion.div)`
  font-size: 30px;
  position: absolute;
  top: 270px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TopicSection() {
  const [clickedId, setClickedId] = useState(null);
  return (
    <Wrapper>
      <MainMsg
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
      >
        환경에 관한 최근 토픽을 확인해보세요!
      </MainMsg>
      <Grid>
        <Box key={"1"} layoutId={"1"} onClick={() => setClickedId("1")}></Box>
        <Box key={"2"} layoutId={"2"} onClick={() => setClickedId("2")}></Box>
        <Box key={"3"} layoutId={"3"} onClick={() => setClickedId("3")}></Box>
        <Box key={"4"} layoutId={"4"} onClick={() => setClickedId("4")}></Box>
      </Grid>
      <AnimatePresence>
        {clickedId ? (
          <Overlay
            onClick={() => {
              setClickedId(null);
            }}
          >
            <Box
              layoutId={clickedId}
              style={{
                width: "90vw",
                height: "80vh",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default TopicSection;
