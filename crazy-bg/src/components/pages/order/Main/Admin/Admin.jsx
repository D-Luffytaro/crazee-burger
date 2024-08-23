import { useContext } from "react";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
`;
