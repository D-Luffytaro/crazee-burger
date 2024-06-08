import Tab from "./Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";

export default function AdminTabs() {
  const {
    isCollapse,
    setIsCollapse,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(AdminContext);

  const selectTab = (tabSelected) => {
    setIsCollapse(false);

    if (tabSelected === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
    }

    if (tabSelected === "edit") {
      setIsEditSelected(true);
      setIsAddSelected(false);
    }
  };

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        onClick={() => setIsCollapse(!isCollapse)}
        className={isCollapse ? "active" : ""}
        Icon={isCollapse ? <FiChevronUp /> : <FiChevronDown />}
      />

      <Tab
        label="Ajouter un produit"
        onClick={() => selectTab("add")}
        className={isAddSelected ? "active" : ""}
        Icon={<AiOutlinePlus />}
      />

      <Tab
        label="Modifier un produit"
        onClick={() => selectTab("edit")}
        className={isEditSelected ? "active" : ""}
        Icon={<MdModeEditOutline />}
      />
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
