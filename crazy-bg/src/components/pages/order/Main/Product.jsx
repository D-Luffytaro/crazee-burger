import styled from "styled-components";

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
            <div className="price">{price}</div>
          </div>
          <button>Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  //background-color: #2196f3;
  width: 15rem;
  height: 20.625rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 15px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  .image {
    //border: 1px solid red;
    max-width: 200px;
    height: 145px;

    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    max-height: 145px;
  }

  .description {
    //border: 1px solid red;
    width: 200px;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 5px;
  }

  .title {
    //border: 1px solid black;
    font-family: Amatic SC;
    font-size: 36px;
    font-weight: 700;
    line-height: 45.4px;
    text-align: left;
    color: #17161a;
  }

  .priceBtn {
    //border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 190px;
    height: 66.5px;
  }

  .onlyPrice {
    //border: 1px solid red;
  }

  .price {
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: #ffa01b;
  }

  button {
    width: 95px;
    height: 38px;
    padding: 12px 26.3px;
    gap: 0px;
    border-radius: 5px;
    background: #ff9f1b;
    color: white;
    border: 1px solid #ff9f1b;
  }
`;
