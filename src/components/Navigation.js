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
        <Links>
          <Link
            to="/game"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: 15,
              marginRight: 20,
            }}
          >
            쉼터
          </Link>
          <Link
            to="/info"
            style={{ textDecoration: "none", color: "white", fontSize: 15 }}
          >
            Who We Are
          </Link>
        </Links>
      </NavSubContainer>
    </NavContainer>
  );
}

const Links = styled.div`
  display: flex;
`;

const NavContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 45px;
  z-index: 100;
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
