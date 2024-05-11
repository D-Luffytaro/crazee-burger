import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Tabs from "./Tabs";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <Menu />
      <div className="tabs">
        <Tabs label="Ajouter un produit " />
        <Tabs label="Modifier un produit" />
      </div>
      <div className="panel"></div>
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

  .panel {
    //border: 1px solid blue;
    height: 250px;
    border: 1px solid #e4e5e9;
    background-color: white;
    box-shadow: 0px -6px 8px -2px #0000001a;
  }
`;
