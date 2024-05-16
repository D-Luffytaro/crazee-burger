import styled from "styled-components";

export default function Tab({ label, Icon, className }) {
  return (
    <TabStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
      <span>{label}</span>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 44px;
  width: 230px;

  display: inline-flex;
  align-items: center;

  background: #ffffff;
  padding: 10px 22px;

  margin-right: 1px;

  border: 1px solid #e4e5e9;
  border-radius: 5px 5px 0 0;

  span {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: #93a2b1;
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid white;
    span {
      text-decoration: underline;
      // border-bottom: 2px solid #93a2b1;
    }
  }

  &:active {
    background: #292729;
    box-shadow: 0 -6px 8px -2px rgba(0, 0, 0, 0.1);

    span {
      color: white;
    }
  }
`;
