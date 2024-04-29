import styled from "styled-components";
import Hero from "./Hero";
import Features from "./Features";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const HomepageStyled = styled.div`
  /* Ajoutez vos styles personnalisés ici */
`;

export default function Homepage() {
  return (
    <>
      <Navbar />
      <HomepageStyled>
        <Hero />
        <Features />
      </HomepageStyled>
      <Footer />
    </>
  );
}
