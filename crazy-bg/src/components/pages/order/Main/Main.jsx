import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import { useContext } from "react";
import AdminContext from "../../../../context/AdminContext";
import Admin from "./Admin/Admin";

export default function Main() {
  const { isModeAdmin, setIsModeAdmin } = useContext(AdminContext);
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;

  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  overflow-y: scroll;

  /* .basket {
    background-color: blueviolet;
  } */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`;
