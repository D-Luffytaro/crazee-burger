import styled from "styled-components";

export default function Tabs({ label }) {
  return (
    <TabsStyled className="Tabs">
      <span>{label}</span>
      {/* <div>Icon</div> */}
    </TabsStyled>
  );
}

const TabsStyled = styled.button`
  height: 44px;
  width: 212.84px;
  padding: 10px 22.82px 11px 22px;
  border-radius: 5px 5px 0px 0px;
  border: 1px solid #e4e5e9;
  background: #ffffff;

  span {
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.79px;
    text-align: center;
    color: #93a2b1;
  }
`;
