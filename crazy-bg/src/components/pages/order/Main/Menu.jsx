import styled from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import Product from "./Product";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Product
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;

  justify-items: center;
  padding: 50px 50px 150px;
  box-shadow: ${theme.shadows.strong};

  overflow: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
