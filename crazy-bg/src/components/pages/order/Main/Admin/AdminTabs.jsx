import { useContext } from "react";
import Tab from "./Tab";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import AdminContext from "../../../../../context/AdminContext";
import { tabsConfig } from "./tabsConfig";
import { theme } from "../../../../../theme";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(AdminContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); // ouvre moi le panel dans tous les cas
    setCurrentTabSelected(tabSelected); // réactualise l'onglet sélectionné
  };

  const tabs = tabsConfig;

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "active" : ""}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;

  .active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    border-bottom: 2px;
    .icon,
    span {
      color: ${theme.colors.white};
    }
  }

  button {
    margin-left: 1px;
  }
`;
