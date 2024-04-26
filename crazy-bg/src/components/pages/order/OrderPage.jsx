import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";

export default function OrderPage() {
  // affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.primary};

  .container {
    display: flex;
    flex-direction: column;
    height: 95vh;
    width: 87.5rem;
  }
`;
