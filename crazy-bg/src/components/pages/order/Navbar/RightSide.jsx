import styled from "styled-components";
import Profile from "./Profile";
import NavbarRightSideIncomplet from "./NavbarRightSideIncomplet";

export default function RightSide() {
  return (
    <RightSideStyled>
      <NavbarRightSideIncomplet />
      <Profile />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;

  font-family: "Open Sans", sans-serif;
  padding-right: 3.125rem;
`;
