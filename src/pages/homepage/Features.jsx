import styled from "styled-components";
import FeatureItem from "./FeatureItem";
import { features } from "../../assets/content/features";
import { theme } from "../../theme";

export default function Features() {
  return (
    <FeaturesStyled>
      {features.map(({ id, icon, title, content }) => {
        return (
          <FeatureItem key={id} icon={icon} title={title} content={content} />
        );
      })}
    </FeaturesStyled>
  );
}

const FeaturesStyled = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: ${theme.spacing.xl};

  @media (max-width: ${theme.responsive.md}) {
    flex-direction: column;
  }
`;
