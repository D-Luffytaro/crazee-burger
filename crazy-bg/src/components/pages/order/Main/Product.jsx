import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";

export default function Product({ imageSource, title, price }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="description">
        <div className="title">{title}</div>
        <div className="priceBtn">
          <div className="onlyPrice">
            <div className="price">{formatPrice(price)}</div>
          </div>
          <button>Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  width: 15rem;
  height: 20.625rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 15px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  /* Image Section */

  .image {
    //border: 1px solid red;

    margin-top: 3.125rem;
    margin-bottom: 0.9375rem;

    max-width: 12.5rem;
    height: 9.0625rem;

    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    max-height: 9.0625rem;
  }

  /* Description Section */

  .description {
    //border: 1px solid red;
    width: 12.5rem;
    height: 6.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.3125rem;
  }

  .title {
    //border: 1px solid red;
    font-family: Amatic SC;
    font-size: 36px;
    font-weight: 700;
    line-height: 2.8375rem;
    color: #17161a;

    width: 11.875rem;
    height: 2.875rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }

  .priceBtn {
    //border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11.875rem;
    height: 4.1563rem;
    position: relative;
    bottom: 0.5rem;
  }

  .onlyPrice {
    //border: 1px solid red;
  }

  .price {
    font-family: Open Sans;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem;
    text-align: left;
    color: #ffa01b;
  }

  button {
    width: 5.9375rem;
    height: 2.375rem;
    padding: 12px 26.3px;
    border-radius: 5px;
    background: #ff9f1b;
    color: white;
    border: 1px solid #ff9f1b;
    font-family: Arial;
    font-size: 11px;
    font-weight: 700;
    line-height: 12px;
    text-align: center;
    cursor: pointer;
  }

  button:active {
    background-color: white;
    color: #ff9f1b;
  }
`;
