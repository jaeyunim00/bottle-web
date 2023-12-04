import styled from "styled-components";

import IceWeight from "./Data/IceWeight";
import greenland from "./Data/GreenLand";

function GreenLandChart() {
  return (
    <>
      <IceContainer initial="initial" animate="animate">
        <IceWeight data={greenland}></IceWeight>
      </IceContainer>
    </>
  );
}

const IceContainer = styled.div`
  height: 500px;
`;
export default GreenLandChart;
