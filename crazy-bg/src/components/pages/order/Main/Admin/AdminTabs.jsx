import Tab from "./Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";

export default function AdminTabs({ className }) {
  return (
    <AdminTabsStyled className={className}>
      <Tab className="chevron" Icon={<FiChevronDown className="icon" />} />
      <Tab
        label="Ajouter un produit "
        Icon={<AiOutlinePlus className="icon" />}
      />
      <Tab
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

  .chevron {
    width: 60px;
  }

  .icon {
    color: #93a2b1;
    width: 16px;
    height: 16px;
  }
`;
