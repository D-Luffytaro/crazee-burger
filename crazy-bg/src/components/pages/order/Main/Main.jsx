import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <Menu />
      <div className="panelOnglet">
        <div className="onglet">onglet</div>
        <div className="panel">panel</div>
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

  
  .panelOnglet {
    border: 1px solid red;
    grid-column: span 2;
  }

  .onglet {
    //border: 1px solid black;
    background: yellow;
    height: 44px;
  }

  .panel {
    //border: 1px solid blue;
    background: pink;
    height: 250px;
  }
`;
