import PropTypes from "prop-types";
import styled from "styled-components";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    Icon: PropTypes.elementType,
  };

  return (
    <InputStyled className="container">
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 25rem;
  border-radius: 0.313rem;
  background-color: white;
  padding: 1.125rem 0;
  font-size: 0.938rem;

  .icon {
    margin-left: 0.625rem;
    color: #747b91;
    height: 1.125rem;
    width: 1.125rem;
  }

  input {
    border: none;
    width: 85%;
  }

  ::placeholder {
    font-size: 0.938rem;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    color: #d3d3d3;
    opacity: 1;
  }
`;
