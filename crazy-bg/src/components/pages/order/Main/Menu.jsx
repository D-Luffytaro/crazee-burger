import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import Product from "./Product";

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
  grid-template-columns: repeat(4, minmax(15.625rem, 1fr));
  padding: 50px;
  grid-row-gap: 60px;
  justify-items: center;

  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(12.5rem, 1fr));
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(9.375rem, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
    padding: 3.125rem 1.875rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(9.375rem, 1fr));
    padding: 1.875rem;
    grid-row-gap: 1.875rem;
  }
`;
