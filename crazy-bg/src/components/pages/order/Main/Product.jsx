import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function Product({ imageSource, title, price }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{formatPrice(price)}</div>
          <div className="right-description">
            <PrimaryButton className="btn" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: ${theme.colors.white};
  width: 15rem;
  height: 20.625rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  /* Image Section */

  .image {
    margin-top: 50px;
    margin-bottom: 15px;

    max-width: 12.5rem;
    height: 145px;

    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    max-height: 145px;
  }

  /* Description Section */

  .text-info {
    width: 12.5rem;
    height: 6.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.3125rem;
  }

  .title {
    font-family: Amatic SC;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    line-height: 2.8375rem;
    color: ${theme.colors.dark};

    width: 11.875rem;
    height: 2.875rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }

  .description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11.875rem;
    height: 4.1563rem;
    position: relative;
    bottom: 0.5rem;
  }

  .left-description {
    font-family: Open Sans;
    font-size: 1rem;
    font-weight: ${theme.fonts.weights.regular};
    line-height: 1.375rem;
    text-align: left;
    color: ${theme.colors.primary};
  }

  .btn {
    font-size: 11px;
    width: 95px;
    height: 38px;
    cursor: pointer;
  }
`;
