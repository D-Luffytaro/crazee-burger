import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import { theme } from "../../../theme/index";
import Button from "../../reusable-ui/Button";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue} `);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <hr />
      <h2>Connectez-vous</h2>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPersonCircle />}
        className="input-login"
        version="normal"
      />
      <Button
        label={"Accéder à mon espace"}
        Icon={<IoChevronForward />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 31.25rem;
  min-width: 25rem;
  margin: 0px auto;
  padding: 2.5rem ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 0.0938rem solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 1.25rem 0.625rem 0.625rem;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .input-login {
    margin: 18px 0;
  }
`;
