import img from "../../assets/Logo-orange.png";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src={img} alt="Logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    font-size: 2.25rem;
    letter-spacing: 1.5px;
    font-weight: 700;
    line-height: 1em;
    color: #ffa01b;
    font-family: "Amatic SC", sans-serif;
  }

  img {
    object-fit: contain;
    object-position: center;
    width: 5rem;
    height: 3.75rem;
    margin: 0 0.3125rem;
  }
`;
