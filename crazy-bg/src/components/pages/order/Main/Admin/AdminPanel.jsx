import { useContext } from "react";
import styled from "styled-components";
import TextContext from "../../../../../context/TextContext";

export default function PanelAdmin() {
  const { context, setContext } = useContext(TextContext);

  return <AdminPanelStyled>{context}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 250px;
  border: 2px solid #e4e5e9;
  background-color: white;
  box-shadow: 0px -6px 8px -2px #0000001a;
`;
