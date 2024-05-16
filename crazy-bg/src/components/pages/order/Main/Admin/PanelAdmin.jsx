import styled from "styled-components";

export default function PanelAdmin() {
  return <PanelAdminStyled></PanelAdminStyled>;
}

const PanelAdminStyled = styled.div`
  //border: 1px solid blue;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  height: 250px;
  border: 1px solid #e4e5e9;
  background-color: white;
  box-shadow: 0px -6px 8px -2px #0000001a;
`;
