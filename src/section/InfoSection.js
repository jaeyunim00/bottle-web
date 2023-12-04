import styled from "styled-components";
import { motion } from "framer-motion";

function InfoSection() {
  const MsgOneVariants = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
    },
  };

  return (
    <Wrapped>
      <MsgDivOne
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
      >
        <div>EK, If you want to</div>
        <div>do it now</div>
      </MsgDivOne>
      <MsgDivTwo
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        }}
      >
        come with us!
      </MsgDivTwo>
      <MsgDivThree
        initial={{ y: 50, opacity: 0, x: "-50%" }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1.5,
            delay: 0.3,
          },
        }}
      >
        We are GNI.
      </MsgDivThree>
    </Wrapped>
  );
}

const Wrapped = styled.div`
  height: 300vh;
  background-color: black;
  color: white;
`;

const MsgDivOne = styled(motion.div)`
  font-size: 120px;
  // background-color: royalBlue;
  padding: 15px 30px;
  position: absolute;
  top: 100px;
  left: 100px;
`;
const MsgDivTwo = styled(motion.div)`
  font-size: 120px;
  // background-color: royalBlue;
  padding: 15px 30px;
  position: absolute;
  top: 500px;
  right: 100px;
`;

const MsgDivThree = styled(motion.div)`
  font-size: 120px;
  background-color: white;
  padding: 30px 30px;
  position: absolute;
  top: 1200px;
  left: 50%;
  color: black;
`;

export default InfoSection;
