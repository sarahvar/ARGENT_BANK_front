import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

export default function Button({ content, handleClick, className }) {
  return (
    <ButtonStyled className={className} onClick={handleClick}>
      {content}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  font-size: ${theme.fonts.size.S1};
  font-weight: ${theme.fonts.weight.bold};
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
`;
