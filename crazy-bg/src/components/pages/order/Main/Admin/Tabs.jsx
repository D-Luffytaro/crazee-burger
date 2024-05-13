import TabsButton from "./TabsButton";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";

export default function Tabs({ className }) {
  return (
    <TabsStyled className={className}>
      <TabsButton
        className="chevron"
        Icon={<FiChevronDown className="icon" />}
      />
      <TabsButton
        label="Ajouter un produit "
        Icon={<AiOutlinePlus className="icon" />}
      />
      <TabsButton
        label="Modifier un produit"
        Icon={<MdModeEditOutline className="icon" />}
      />
    </TabsStyled>
  );
}

const TabsStyled = styled.div`
  //border: 1px solid red;
  display: flex;
  width: fit-content;
  margin-left: 71px;
  position: absolute;
  bottom: 15.76rem;

  .chevron {
    width: 60px;
  }

  .icon {
    color: #93a2b1;
    width: 16px;
    height: 16px;
  }
`;
