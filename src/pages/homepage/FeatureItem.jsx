import styled from "styled-components";
import { theme } from "../../theme";

export default function FeatureItem({ icon, title, content }) {
  return (
    <FeatureItemStyled>
      <img src={icon} className="feature__icon" alt="feature-icon" />
      <h3 className="title">{title}</h3>
      <span className="content">{content}</span>
    </FeatureItemStyled>
  );
}

const FeatureItemStyled = styled.article`
  flex: 1;
  padding: ${theme.spacing.xl};
  text-align: center;

  .feature__icon {
    display: grid;
    margin: auto;
    place-items: center;
    padding: ${theme.spacing.md};
    max-width: 100px;
    aspect-ratio: 1;
    border: 10px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.circle};
  }

  .title {
    margin-block: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.xs};
    color: #222;
    font-size: ${theme.fonts.size.S2};
  }
`;
