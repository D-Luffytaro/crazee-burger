import styled from "styled-components";
import RightSide from "./RightSide";
import Logo from "../../reusable-ui/Logo";
import { refreshPage } from "../../../utils/window";

export default function Navbar() {
  return (
    <NavbarStyled>
      <nav>
        <Logo className="logo-link" onClick={refreshPage} />
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
    padding: 0rem 1.25rem;
  }

  .logo-link {
    cursor: pointer;
  }
`;
