import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";
import { useContext } from "react";

export default function PanelAdmin() {
  const { isAddSelected, isEditSelected } = useContext(AdminContext);

  return (
    <AdminPanelStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  border: 2px solid #e4e5e9;
  background-color: white;
  box-shadow: 0px -6px 8px -2px #0000001a;
`;
