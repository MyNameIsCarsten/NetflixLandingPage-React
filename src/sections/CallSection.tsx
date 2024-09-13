import styled from "styled-components"

const CallWrapper = styled.span`
    padding: 3rem 10rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    font-weight: 400;

    & a {
        color: rgba(255, 255, 255, 0.7);
        padding-left: 5px;
    }

    @media (max-width: 800px){
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: center;
    }
`

const CallSection = () => {
  return (
    <CallWrapper>
        Fragen?  Einfach anrufen: 
        <a href="tel:0800-000-9677">0800-000-9677</a>
    </CallWrapper>
  )
}

export default CallSection
