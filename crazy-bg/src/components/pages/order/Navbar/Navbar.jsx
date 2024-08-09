import styled from "styled-components";
import RightSide from "./RightSide";
import Logo from "../../../reusable-ui/Logo";
import { refreshPage } from "../../../../utils/window";
import { theme } from "../../../../theme";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className="logo-link" onClick={refreshPage} />
      <RightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.white};

  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid #e4e5e9;

  width: 100%;
  align-items: center;

  .logo-link {
    cursor: pointer;
  }
`;
