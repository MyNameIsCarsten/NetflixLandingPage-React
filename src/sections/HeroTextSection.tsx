import styled from "styled-components";
import HeroEmailSection from "./HeroEmailSection";

const HeroTextSectionWrapper = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 18rem;

    @media (max-width: 1030px) {
        padding: 4rem 10rem;
    }

    @media (max-width: 751px) {
        padding: 1rem 10rem;
    }

    @media (max-width: 689px) {
        padding: 3rem 6rem;
    }

    @media (max-width: 623px) {
        padding: 2rem 4rem;
        text-align: center;
    }
`

const HeroHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40rem;

    & p {
        font-size: 20px;
        font-weight: 500;
        margin: 0;
        margin-bottom: 24px;
    }

    @media (max-width: 500px) {
        font-size: 15px;
    }
`

const HeroH1 = styled.h1`
    text-align: center;
    margin: 0 0 8px 0;
    font-size: 50px;
    font-weight: 700;

    @media (max-width: 500px) {
        font-size: 30px;
    }
`


const HeroTextSection = () => {
  return (
    <HeroTextSectionWrapper>
        <HeroHeading>
            <HeroH1>Unbegrenzt Filme, Serien und mehr</HeroH1>
            <p>Bereits ab 4,99&nbsp;€. Jederzeit kündbar.</p>
        </HeroHeading>
        <HeroEmailSection />
    </HeroTextSectionWrapper>
  )
}

export default HeroTextSection
