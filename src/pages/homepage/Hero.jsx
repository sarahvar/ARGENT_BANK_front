import styled from "styled-components";
import background from "../../assets/img/bank-tree.jpeg";
import { theme } from "../../theme";

export default function Hero() {
  return (
    <HeroStyled>
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </HeroStyled>
  );
}

const HeroStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 40vh;

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }

  .hero-content {
    position: absolute;
    right: 5em;
    background: ${theme.colors.white};
    padding: ${theme.spacing.xl};
    text-align: left;
    margin: ${theme.spacing.xl};

    & .subtitle {
      font-weight: ${theme.fonts.weight.bold};
      margin: 0;
      font-size: ${theme.fonts.size.S3};
    }

    & .text {
      margin-bottom: 0;
      font-size: ${theme.fonts.size.S2};
    }
  }

  @media only screen and (max-width: ${theme.responsive.md}) {
    background-position: bottom;

    .hero-content {
      position: static;
      margin: auto;

      & .subtitle {
        font-weight: ${theme.fonts.weight.bold};
        margin: 0;
        font-size: ${theme.fonts.size.S3};
      }

      & .text {
        margin-bottom: 0;
        font-size: ${theme.fonts.size.S2};
      }
    }
  }

  @media only screen and (max-width: ${theme.responsive.sm}) {
    height: 250px;

    .hero-content {
      width: 100%;
      max-width: 230px;

      & .subtitle {
        font-weight: ${theme.fonts.weight.bold};
        margin: 0;
        font-size: ${theme.fonts.size.S1};
      }

      & .text {
        margin-bottom: 0;
        font-size: ${theme.fonts.size.S0};
      }
    }
  }
`;
