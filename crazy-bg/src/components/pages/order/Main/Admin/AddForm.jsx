import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const newProduct = {
    id: new Date().getTime(),
    imageSource: "/images/burger1.png",
    title: "New",
    price: 5.5,
  };

  const handleSubmit = (event) => {
    event.preventDefault(), handleAdd(newProduct);
  };

  return (
    <AddFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="image-prewiew">Image Prewiew</div>
      <div className="input-fields">
        <input type="text" placeholder="nom" />
        <input type="text" placeholder="image" />
        <input type="text" placeholder="prix" />
      </div>
      <button className="submit-button">Button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-prewiew {
    background-color: #b4b4f3;
    grid-area: 1 / -5 / 4 / 2;
  }

  .input-fields {
    background-color: beige;
    grid-area: 1 / 2 / 4 / -2;
    display: grid;
  }

  .submit-button {
    background-color: aliceblue;
    grid-area: 4 / -2 / 4 / -1;
    width: 50%;
  }
`;
