import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { useContext, useState } from "react";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: new Date().getTime(),
      title: title,
      imageSource: imageSource,
      price: price,
    };

    handleAdd(newProduct);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageSource(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <AddFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="image-prewiew">Image Prewiew</div>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Nom"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="url"
          placeholder="Image"
          value={imageSource}
          onChange={handleImageChange}
        />
        <input
          type="number"
          placeholder="Prix"
          value={price ? price : ""}
          onChange={handlePriceChange}
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
