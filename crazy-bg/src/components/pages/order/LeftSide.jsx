import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LeftSide() {
  return (
    <LeftSideStyled>
      <div>
        <Logo />
      </div>
    </LeftSideStyled>
  );
}

const LeftSideStyled = styled.div``;
