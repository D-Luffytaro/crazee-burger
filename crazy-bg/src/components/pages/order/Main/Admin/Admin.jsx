import { useContext } from "react";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";

export default function Admin() {
  const { isCollapsed } = useContext(AdminContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
