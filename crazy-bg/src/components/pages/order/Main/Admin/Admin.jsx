import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";
import { useContext } from "react";

export default function Admin() {
  const { isCollapse } = useContext(AdminContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapse && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
