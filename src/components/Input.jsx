import styled from "styled-components";
import { theme } from "../theme";
// import { useState } from "react";

export default function Input({
  label,
  type,
  id,
  className,
  placeholder,
  handleChange,
}) {
  // const [value, setValue] = useState("");
  // if no ID provided, use type value
  !id && (id = type);

  return (
    <InputStyled className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        onChange={handleChange}
        type={type}
        id={id}
      />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing.md};
  text-align: start;
  font-weight: ${theme.fonts.weight.bold};

  & input {
    padding: ${theme.spacing.xs};
    font-size: ${theme.fonts.size.S1};

    &:focus {
      outline: none;
      border: 2px solid ${theme.colors.primary};
      border-radius: ${theme.borderRadius.subtle};
    }
  }
`;
