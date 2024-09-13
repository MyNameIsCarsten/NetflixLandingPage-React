import styled from "styled-components"
import HeroEmailSection from "./HeroEmailSection"

const NewsletterWrapper = styled.div`
    padding: 3rem 10rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    & form {
        display: flex;
        flex-direction: column;
        align-items: center;

        & h3 {
            max-width: none;
        }

        & div {
            width: -webkit-fill-available;

            @media (max-width: 800px){
                flex-direction: column;
            }

            & a {
            
              @media (max-width: 800px){
                  padding: 1.5rem 2rem;
              }
          
            }
        }

        @media (min-width: 1200px) {
          max-width: 70%;
        }
    }

    @media (max-width: 800px){
        padding: 1.5rem 2rem;
    }

`

const NewsletterSection = () => {
  return (
    <NewsletterWrapper>
      <HeroEmailSection />
    </NewsletterWrapper>
  )
}

export default NewsletterSection
