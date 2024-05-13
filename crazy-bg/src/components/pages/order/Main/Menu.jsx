import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import Product from "./Product";
import { theme } from "../../../../theme";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          <Product
            imageSource={produit.imageSource}
            title={produit.title}
            price={produit.price}
            key={produit.id}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  justify-items: center;
  padding: 50px;

  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow: scroll;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(9.375rem, 1fr));
  }

  /* @media (max-width: 830px) {
    grid-template-columns: repeat(1, minmax(100%, 1fr));
    padding: 1.875rem;
    grid-row-gap: 1.875rem;
  } */
`;
