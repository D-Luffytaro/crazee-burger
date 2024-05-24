import Tab from "./Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { useState } from "react";

export default function AdminTabs({ isCollapse, setIsCollapse }) {

  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);

  const selectAddTab = () => {
    setIsCollapse(false);
    setIsAddSelected(true);
    setIsEditSelected(false);
  };

  const selectEditTab = () => {
    setIsCollapse(false);
    setIsEditSelected(true);
    setIsAddSelected(false);
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
        onClick={selectAddTab}
        className={isAddSelected ? "active" : ""}
        Icon={<AiOutlinePlus />}
      />

      <Tab
        label="Modifier un produit"
        onClick={selectEditTab}
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
