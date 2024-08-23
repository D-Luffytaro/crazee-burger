import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Tab({ label, Icon, className, onClick }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      <div className="icon">{Icon && Icon}</div>
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  border: 1px solid blue;
  padding: 0 22px;
  height: 43px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  position: relative;
  left: 5%;
  top: 1px;

  background: ${theme.colors.background_white};
  border-width: 1px 1px 2px 1px;
  border-color: ${theme.colors.greyLight};
  border-style: solid;
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0px 0px;

  .icon {
    display: flex;
  }

  span {
    font-family: "Open Sans", sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    line-height: 22px;
    text-align: center;
    color: ${theme.colors.greySemiDark};
  }

  .label {
    margin-left: 13px;
  }

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }
`;
