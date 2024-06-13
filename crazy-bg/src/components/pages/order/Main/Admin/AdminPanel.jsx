import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";
import { useContext } from "react";
import { getTabSelected, tabsConfig } from "./tabsConfig";

export default function PanelAdmin() {
  const { currentTabSelected } = useContext(AdminContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected.label}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 250px;
  border: 2px solid #e4e5e9;
  background-color: white;
  box-shadow: 0px -6px 8px -2px #0000001a;
`;
