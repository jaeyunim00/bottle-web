import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiPolarBear } from "react-icons/gi";

function Navigation() {
  return (
    <NavContainer>
      <NavSubContainer>
        <LogoContainer>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              fontSize: 20,
            }}
          >
            <GiPolarBear
              size="30"
              color="white"
              style={{ marginRight: "15px" }}
            ></GiPolarBear>
            GNI
          </Link>
        </LogoContainer>
        <Link
          to="/game"
          style={{ textDecoration: "none", color: "white", fontSize: 15 }}
        >
          게임
        </Link>
        <Link
          to="/info"
          style={{ textDecoration: "none", color: "white", fontSize: 15 }}
        >
          알아보기
        </Link>
      </NavSubContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  border-bottom: 1px solid #353535;
  border-top: 1px solid #353535;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 45px;
`;

const NavSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  height: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default Navigation;
