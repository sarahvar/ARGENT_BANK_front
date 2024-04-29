import styled from "styled-components";
import { theme } from "../theme";

export default function Footer() {
  return <FooterStyled>Copyright 2024 Argent Bank</FooterStyled>;
}

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing.xl} 0 ${theme.spacing.lg};
  border-top: 2px solid ${theme.colors.grey};
`;
