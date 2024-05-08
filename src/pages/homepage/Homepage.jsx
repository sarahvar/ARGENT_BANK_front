import styled from "styled-components";
import Hero from "./Hero";
import Features from "./Features";


const HomepageStyled = styled.div`
  /* Ajoutez vos styles personnalisés ici */
`;

export default function Homepage() {
  return (
    <>
      <HomepageStyled>
        <Hero />
        <Features />
      </HomepageStyled>
    </>
  );
}
