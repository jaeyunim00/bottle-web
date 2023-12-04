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
    </Wrapped>
  );
}

const Wrapped = styled.div`
  height: 100vh;
  background-color: black;
  color: white;
`;

const MsgDivOne = styled(motion.div)`
  font-size: 120px;
  background-color: royalBlue;
  padding: 15px 30px;
  position: absolute;
  top: 100px;
  left: 100px;
`;
const MsgDivTwo = styled(motion.div)`
  font-size: 120px;
  background-color: royalBlue;
  padding: 15px 30px;
  position: absolute;
  top: 500px;
  right: 100px;
`;

export default InfoSection;
