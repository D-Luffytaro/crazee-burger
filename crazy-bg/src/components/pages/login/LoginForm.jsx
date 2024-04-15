import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa6";
import img from "../../../assets/svg.svg";

export default function LoginForm() {
  // state (état, données)
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue} `);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // affichage (render)
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <hr />
      <h2>Connectez-vous</h2>

      <div className="container">
        <img src={img} alt="user" className="icon" />
        <input
          value={inputValue}
          type="text"
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          required
        />
      </div>
      <br />

      <button>
        Accéder à mon espace
        <div className="chevron">
          <FaChevronRight />
        </div>
      </button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  color: white;
  width: 29rem;
  height: 27.39rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Amatic SC", sans-serif;
    font-weight: 700;
    font-size: 3rem;
  }

  hr {
    width: 25rem;
    border: 0.094rem solid #f56a2c;
  }

  h2 {
    font-family: "Amatic SC", sans-serif;
    font-weight: 700;
    font-size: 2.25rem;
  }

  //Input section
  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 25rem;
    border-radius: 0.313rem;
    background-color: white;
    padding: 1.125rem 0;
    font-size: 0.938rem;
  }

  .icon {
    margin-left: 0.625rem;
    color: #747b91;
    height: 1.125rem;
    width: 1.125rem;
  }

  input {
    border: none;
    width: 85%;
  }

  ::placeholder {
    font-size: 0.938rem;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    color: #d3d3d3;
    opacity: 1;
  }

  //Button section
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    font-size: 0.938rem;
    border-radius: 0.313rem;
    background-color: #ff9f1b;
    color: white;
    width: 25rem;
    height: 3.313rem;
    padding: 1.125rem 6.6375rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    line-height: 0.938rem;
    text-align: center;
  }

  .chevron {
    display: flex;
  }

  :hover {
    background-color: white;
    border: 0.0625rem solid #ff9f1b;
    color: #ff9f1b;
  }
`;
