import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import background from "../../../assets/Burger-background.jpg";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className={"logo"} />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: rgba(0, 0, 0, 0.7) url(${background}) no-repeat center
    center/cover;
  background-blend-mode: darken;

  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1;

  .logo {
    transform: scale(2.5);
  }
`;
