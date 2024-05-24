import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import styled from "styled-components";
import { useState } from "react";

export default function Admin() {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <AdminStyled>
      <AdminTabs isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
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
