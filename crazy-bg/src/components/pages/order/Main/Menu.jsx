import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return <div className="produit">{produit.title}</div>;
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
  justify-items: center;

  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .produit {
    background-color: #2196f3;
    width: 15rem;
    height: 20.625rem;
  }
`;
