import styled from "styled-components";
import Hero from "./Hero";
import Features from "./Features";

export default function Homepage() {
  return (
    <HomepageStyled>
      <Hero />
      <Features />
    </HomepageStyled>
  );
}

const HomepageStyled = styled.main``;
