import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
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
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
