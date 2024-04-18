import styled from "styled-components";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

export default function Navbar() {
  return (
    <NavbarStyled>
      <nav>
        <LeftSide />
        <RightSide />
      </nav>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0.9375rem 0.9375rem 0rem 0rem;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0rem 4.375rem 0rem 1.25rem;
  }
`;
