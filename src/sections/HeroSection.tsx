import styled from "styled-components";
import heroBackground from "../assets/graphics/hero-background.jpg";
import NavigationSection from "./NavigationSection";
import HeroTextSection from "./HeroTextSection";

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.6), 
      rgba(0, 0, 0, 0.6)
    ), 
    url(${heroBackground}) no-repeat center center/cover;
  position: relative;
  margin-top: -1rem;
  backdrop-filter: brightness(0.5);
  box-shadow: inset 120px 100px 250px #000000, inset -120px -100px 250px #000000;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2; /* Ensures the content is above the background */
  max-width: 100vw;
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <NavigationSection />
        <HeroTextSection />
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
