import styled from "styled-components";

export const Input = ({
  label,
  type = "text",
  id,
  withLabel,
  placeholder,
  props,
}) => {
  return (
    <>
      {withLabel && <label htmlFor={id}>{label}</label>}
      <StyledInput id={id} type={type} placeholder={placeholder} {...props} />
    </>
  );
};

const StyledInput = styled.input`
  border: 2px solid var(--primary-color);
  padding: 0 ${(props) => props.size || "0.75rem"};
  width: 100%;
  height: 3rem;
  font-size: inherit;
  &:focus {
    outline: none;
    border: 2px solid var(--color-dark);
  }
`;
