import styled from "styled-components";

export default function ImagePrewiew({ imageSource, title }) {
  return (
    <ImagePrewiewStyled className="image-prewiew">
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <span>Aucune Image</span>
      )}
    </ImagePrewiewStyled>
  );
}

const ImagePrewiewStyled = styled.div`
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
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
