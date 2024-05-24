import styled from "styled-components";

export default function Tab({ label, Icon, className, onClick }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      <div className="icon">{Icon && Icon}</div>
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 43px;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;
  left: 5%;
  top: 2px;

  background: #ffffff;

  border-width: 1px 1px 2px 1px;
  border-color: #e4e5e9;
  border-style: solid;

  border-radius: 5px 5px 0 0;

  .icon {
    color: #93a2b1;
    width: 16px;
    height: 16px;
  }

  span {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: #93a2b1;
  }

  .label {
    margin-left: 13px;
  }

  &:hover {
    border-bottom: 2px solid white;
    span {
      text-decoration: underline;
    }
  }
`;
