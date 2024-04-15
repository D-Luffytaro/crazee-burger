import PropTypes from "prop-types";

import styled from "styled-components";

export default function PrimaryButton({ label, Icon }) {
  PrimaryButton.propTypes = {
    label: PropTypes.string,
    Icon: PropTypes.elementType,
  };

  return (
    <PrimaryButtonStyled className="hover">
      <span>{label}</span>
      <div>{Icon && Icon}</div>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.938rem;
  font-weight: 700;

  border: none;
  border-radius: 0.313rem;

  color: white;
  background-color: #ff9f1b;

  width: 25rem;
  height: 3.313rem;
  line-height: 0.938rem;
  padding: 1.125rem 6.6375rem;

  &:hover {
    background-color: white;
    border: 0.0625rem solid #ff9f1b;
    color: #ff9f1b;
  }
`;
