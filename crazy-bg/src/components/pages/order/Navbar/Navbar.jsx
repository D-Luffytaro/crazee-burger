import styled from "styled-components";
import RightSide from "./RightSide";
import Logo from "../../../reusable-ui/Logo";
import { refreshPage } from "../../../../utils/window";
import { theme } from "../../../../theme";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <nav>
        <Logo className="logo-link" onClick={refreshPage} />
        <RightSide username={username} />
      </nav>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  background-color: ${theme.colors.white};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid #E4E5E9;

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
