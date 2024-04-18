import PropTypes from "prop-types";
import img from "../../assets/Logo-orange.png";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className }) {
  return (
    <LogoStyled className={className}>
      <h1>Crazee</h1>
      <img src={img} alt="Logo" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

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
    width: 5rem; // for Safari and Firefox
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
