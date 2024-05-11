import styled from "styled-components";

export default function TabsButton({ label, Icon, className }) {
  return (
    <TabsButtonStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
      <span>{label}</span>
    </TabsButtonStyled>
  );
}

const TabsButtonStyled = styled.button`
  height: 44px;
  width: 230px;
  display: inline-flex;
  align-items: center;

  padding: 10px 22px; /* Consistent padding */
  border-radius: 5px 5px 0 0;
  border: 1px solid #e4e5e9;
  background: #ffffff;

  span {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px; /* Adjusted line-height */
    text-align: center;
    color: #93a2b1;
    padding-left: 10px;
  }

  &:hover {
    cursor: pointer;
    span {
      border-bottom: 2px solid #93a2b1;
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
