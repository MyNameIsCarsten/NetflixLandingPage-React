import styled from "styled-components"
import SelectElement from "../components/LanguageSelect"

const FooterWrapper = styled.div`
    padding: 3rem 10rem;

    & div {
        max-width: 8rem;
    }

    & p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.1rem;
        font-weight: 400;
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
