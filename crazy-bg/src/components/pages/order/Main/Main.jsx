import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <div className="menu">Menu</div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 25% 1fr;

  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .basket {
    background-color: blueviolet;
  }
  .menu {
    background-color: #2196f3;
  }
`;
