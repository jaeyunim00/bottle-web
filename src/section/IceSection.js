import styled from "styled-components";
import GreenLandChart from "../components/GreenLandChart";
import { Mobile, PC } from "../components/MediaQuery";

function IceSection() {
  return (
    <Wrap>
      <Mobile>
        <IceBox>
          <IceBoxImg></IceBoxImg>
        </IceBox>
        <ChartBox>
          <GreenLandChart></GreenLandChart>
        </ChartBox>
      </Mobile>
      <PC>Hello</PC>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const IceBox = styled.div`
  background-color: white;
  width: 500px;
  height: 700px;
  padding: 2px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const IceBoxImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(/assets/ice-image.jpg);
  background-size: cover;
`;

const ChartBox = styled.div`
  width: 1000px;
  height: 500px;
`;

export default IceSection;
