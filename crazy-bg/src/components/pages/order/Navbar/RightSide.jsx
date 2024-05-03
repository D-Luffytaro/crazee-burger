import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function RightSide({ username }) {
  return (
    <RightSideStyled>
      <ToggleButton
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
      />
      <Profile username={username} />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;

  font-family: "Open Sans", sans-serif;
  padding-right: 3.125rem;
`;
