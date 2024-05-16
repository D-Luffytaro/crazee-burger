import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import AdminContext from "../../../context/AdminContext";
import { useState } from "react";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);

  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  };

  const { username } = useParams();

  return (
    <AdminContext.Provider value={adminContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
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
