import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { Link } from "react-router-dom";

export default function LeftSide() {
  return (
    <LeftSideStyled>
      <div>
        <Link to="/" className="link">
          <Logo />
        </Link>
      </div>
    </LeftSideStyled>
  );
}

const LeftSideStyled = styled.div`
  .link {
    text-decoration: none;
  }
`;
