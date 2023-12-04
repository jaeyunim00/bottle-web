import styled from "styled-components";

function Co2Section() {
  return (
    <EarthImgWrap>
      <EarthImg></EarthImg>
    </EarthImgWrap>
  );
}

const EarthImgWrap = styled.div`
  width: 100vw;
  height: 200vh;
  // border-radius: 50%;
  background-color: yellow;
  overflow: hidden;
  // position: fixed;
`;

const EarthImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(/assets/earth-background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export default Co2Section;
