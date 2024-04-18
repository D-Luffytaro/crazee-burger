import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";

export default function RightSide() {
  const { username } = useParams();
  return (
    <RightSideStyled>
      <div className="lolo">
        <p>
          Hey, <span>{username}</span>
        </p>
        <Link to="/" className="link">
          Se déconnecter
        </Link>
      </div>
      <BsPersonCircle className="icon" />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  color: #747b91;

  font-family: "Open Sans", sans-serif;

  .lolo {
    margin-right: 0.625rem;

    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.375rem;
      text-align: right;
      margin: 0;
    }

    span {
      color: #ffa01b;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.375rem;
      text-align: right;
    }

    .link {
      color: #747b91;
      font-size: 0.625rem;
      text-decoration: none;
      font-size: 0.625rem;
      font-weight: 400;
      line-height: 0.875rem;
      text-align: right;
    }
  }

  .icon {
    height: 2.25rem;
    width: 2.25rem;
  }
`;
