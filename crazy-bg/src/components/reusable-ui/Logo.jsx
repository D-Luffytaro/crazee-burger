import img from "../../assets/Logo-orange.png";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>Crazee</h1>
      <img src={img} alt="Logo" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.25rem;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 0.0938rem;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 3.75rem;
    width: 5rem;
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
