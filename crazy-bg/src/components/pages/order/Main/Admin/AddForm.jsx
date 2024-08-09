import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { useContext, useState } from "react";
import TextInput from "../../../../reusable-ui/TextInput";
import Button from "../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";
import { getInputTextConfig } from "./inputTextConfig";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    };

    handleAdd(newProductToAdd);
    displaySuccessMessage();

    setNewProduct(EMPTY_PRODUCT);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    const name = event.target.name;
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const inputTexts = getInputTextConfig(newProduct);

  return (
    <AddFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="image-prewiew">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div>Aucune Image</div>
        )}
      </div>
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.index}
            name={input.name}
            value={input.value}
            placeholder={input.placeholder}
            Icon={input.Icon}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .image-prewiew {
    grid-area: 1 / -5 / 4 / 2;
    display: flex;
    justify-content: center;
    border: 1px solid #e4e5e9;
    border-radius: 5px;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #93a2b1;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .input-fields {
    grid-area: 1 / 2 / 4 / -2;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;

    .submit-button {
      height: 100%;
      width: 50%;
    }
  }
`;
