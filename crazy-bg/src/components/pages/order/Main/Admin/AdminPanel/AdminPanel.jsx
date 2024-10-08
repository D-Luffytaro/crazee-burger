import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { tabsConfig, getTabSelected } from "../tabsConfig";
import { theme } from "../../../../../../theme";

export default function PanelAdmin() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      {tabSelected.label && tabSelected.Content}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 240px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box;
  padding: 30px 5%;
`;
