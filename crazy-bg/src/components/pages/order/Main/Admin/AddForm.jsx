import styled from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled action="submit">
      <div className="image-prewiew">Image Prewiew</div>
      <div className="input-fields">Input Fields</div>
      <div className="submit-button">Submit Button</div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  .image-prewiew {
    background-color: #b4b4f3;
    grid-area: 1 / -5 / 4 / 2;
  }

  .input-fields {
    background-color: beige;
    grid-area: 1 / 4 / 4 / -2;
  }

  .submit-button {
    background-color: aliceblue;
    grid-area: 4 / -2 / 4 / -1;
  }
`;
