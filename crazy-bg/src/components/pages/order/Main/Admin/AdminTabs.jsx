import Tab from "./Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { useContext } from "react";
import TextContext from "../../../../../context/TextContext";

export default function AdminTabs({ isCollapse, setIsCollapse }) {
  const { context, setContext } = useContext(TextContext);

  const toggle = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        onClick={toggle}
        className={isCollapse ? "active" : ""}
        Icon={
          isCollapse ? (
            <FiChevronUp className="icon" />
          ) : (
            <FiChevronDown className="icon" />
          )
        }
      />

      <Tab
        label="Ajouter un produit"
        onClick={() => setContext("Ajouter un produit")}
        className={isCollapse ? "active" : ""}
        Icon={<AiOutlinePlus className="icon" />}
      />

      <Tab
        label="Modifier un produit"
        onClick={() => setContext("Modifier un produit")}
        className={isCollapse ? "active" : ""}
        Icon={<MdModeEditOutline className="icon" />}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  width: fit-content;

  .icon {
    color: #93a2b1;
    width: 16px;
    height: 16px;
  }

  .active {
    background: #292729;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #292729;
    .icon {
      color: white;
    }
  }

  button {
    margin-right: 1px;
  }
`;
