import styled from "styled-components"
import SelectElement from "../components/LanguageSelect"

const FooterWrapper = styled.div`
    padding: 3rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & div {
        max-width: 8rem;
    }

    & p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.1rem;
        font-weight: 400;
    }

    @media (max-width: 600px){
      padding: 3rem 5rem;
    }
`

const FooterSection = () => {
  return (
    <FooterWrapper>
        <SelectElement />
        <p>Netflix Deutschland</p>
    </FooterWrapper>
  )
}

export default FooterSection
