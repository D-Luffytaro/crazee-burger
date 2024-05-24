import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import AdminContext from "../../../context/AdminContext";
import TextContext from "../../../context/TextContext";
import { useState } from "react";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [context, setContext] = useState("Default value");

  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  };

  const textContextValue = {
    context,
    setContext,
  };

  return (
    <AdminContext.Provider value={adminContextValue}>
      <TextContext.Provider value={textContextValue}>
        <OrderPageStyled>
          <div className="container">
            <Navbar />
            <Main />
          </div>
        </OrderPageStyled>
      </TextContext.Provider>
    </AdminContext.Provider>
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
