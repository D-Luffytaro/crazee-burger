import Main from "./Main";
import Navbar from "./Navbar";
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

  background-color: #ff9f1a;

  .container {
    display: flex;
    flex-direction: column;
    height: 95vh;
    width: 87.5rem;
  }
`;
