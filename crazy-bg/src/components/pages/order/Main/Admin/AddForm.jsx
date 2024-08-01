import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { useContext, useState } from "react";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    };

    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    const name = event.target.name;
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  return (
    <AddFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="image-prewiew">Image Prewiew</div>
      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="url"
          placeholder="Image"
          onChange={handleChange}
        />
        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
        />
      </div>
      <button className="submit-button">Ajouter un nouveau au menu</button>
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
