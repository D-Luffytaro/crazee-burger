import { theme } from "../../theme";
import styled from "styled-components";

export default function PrimaryButton({ label, Icon, className }) {
  return (
    <PrimaryButtonStyled className={className}>
      <span>{label}</span>
      <div>{Icon && Icon}</div>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 1.125rem 1.5rem;
  border-radius: 0.3125rem;
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.heavy};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 0.0625rem solid ${theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 0.0625rem solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 0.0625rem solid ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
