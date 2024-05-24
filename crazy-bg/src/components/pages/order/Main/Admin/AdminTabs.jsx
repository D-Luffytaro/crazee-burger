import Tab from "./Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import styled from "styled-components";

export default function AdminTabs({ isCollapse, setIsCollapse }) {
  const toggle = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <AdminTabsStyled>
      <Tab
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
        className="tab"
        label="Ajouter un produit "
        Icon={<AiOutlinePlus className="icon" />}
      />

      <Tab
        className="tab"
        label="Modifier un produit"
        Icon={<MdModeEditOutline className="icon" />}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  width: fit-content;

  position: relative;
  top: 2px;
  margin-left: 5%;

  .icon {
    color: #93a2b1;
    width: 16px;
    height: 16px;
  }

  .tab {
    width: 225px;
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
`;
