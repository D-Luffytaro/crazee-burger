import styled from "styled-components";

export default function Product({ imageSource, title, price }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="description">
        <div>{title}</div>
        <div className="price">
          <div>{price}</div>
          <button>Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background-color: #2196f3;
  width: 15rem;
  height: 20.625rem;

  .image {
    border: 1px solid red;
    width: 100px;
    height: auto;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .description {
    border: 1px solid rebeccapurple;
  }

  .price {
    border: 1px solid black;
  }
`;
