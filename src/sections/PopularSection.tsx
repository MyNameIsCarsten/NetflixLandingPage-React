import styled from "styled-components"
import CountrySelect from "../components/CountrySelect"
import ContentSelect from "../components/ContentSelect"
import { useState } from "react"
import MovieCardSection from "./MovieCardSection"

const PopularWrapper = styled.div`
    padding: 3rem 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & h2 {
        color: white;
    }

    & div {
        justify-content: center;
        font-size: 20px;
    }

    @media (max-width: 800px){
        padding: 3rem 3rem;
    }

    
`

const PopularSection = () => {
  
    const [country, setCountry] = useState("local");
  
    return (
        <PopularWrapper>
            <h2>Derzeit beliebt</h2>
            <CountrySelect value={country} setCountry={setCountry} />
            <ContentSelect selectedCountry={country}/>
            <MovieCardSection />
        </PopularWrapper>
    )
}

export default PopularSection
