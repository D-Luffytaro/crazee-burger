import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { theme } from "../../../../theme";

export default function Profile() {
  const { username } = useParams();
  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Hey, <span>{username}</span>
        </p>
        <Link to="/" className="link">
          Se déconnecter
        </Link>
      </div>
      <BsPersonCircle className="icon" />
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.greyBlue};

  font-family: "Open Sans", sans-serif;

  .info {
    margin-right: 0.625rem;

    p {
      font-size: 1rem;
      font-weight: ${theme.fonts.weights.regular};
      line-height: 1.375rem;
      text-align: right;
      margin: 0;
    }

    span {
      color: ${theme.colors.primary};
      font-size: 1rem;
      font-weight: ${theme.fonts.weights.bold};
      line-height: 1.375rem;
      text-align: right;
    }

    .link {
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.XXS};
      text-decoration: none;
      font-weight:  ${theme.fonts.weights.regular};
      line-height: 0.875rem;
      text-align: right;
    }
  }

  .icon {
    height: 2.25rem;
    width: 2.25rem;
  }
`;
