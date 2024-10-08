import styled from "styled-components";
import { useContext } from "react";
import Product from "./Product";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  const { menu, handleDelete, isModeAdmin, resetMenu } =
    useContext(OrderContext);

  if (menu.length === 0) {
    if (!isModeAdmin) {
      return <EmptyMenuClient />;
    }
    return <EmptyMenuAdmin resetMenu={resetMenu} />;
  }

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Product
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onClick={() => handleDelete(id)}
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
