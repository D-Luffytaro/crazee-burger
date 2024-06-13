import Tab from "./Tab";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";
import { tabsConfig } from "./tabsConfig";

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
  width: fit-content;

  .active {
    background: #292729;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #292729;
    .icon,
    span {
      color: white;
    }
  }

  button {
    margin-right: 1px;
  }
`;
