import styled from "styled-components"
import PopcornSVG from "../components/PopcornSVG"

const MoreInfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 3rem 10rem;
    transition: all 0.5s cubic-bezier(0.33, 0, 0, 1);

    &:hover {
        scale: 1.03;
    }

    @media (max-width: 800px){
        padding: 3rem 3rem;
    }

    @media (max-width: 600px){
        flex-direction: column;
    }
`

const InfoBox = styled.div`
    align-items: center;
    padding: 0.88rem 1.5em;
    background: linear-gradient(91deg, #482566 0%, #161d52 99.51%);
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    width: -webkit-fill-available;

    @media (max-width: 1080px) {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    
    & h3 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 500;
    }

    & p {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 400;
    }
`

const Button = styled.button`
    color: white;
    background-color: rgba(128, 128, 128, 0.4);
    border: none;
    border-radius: 4px;
    padding: 16px;
    font-size: 1.2rem;
    font-weight: 700;

    &:hover {
        cursor: pointer;
    }
`


const MoreInfoSection = () => {
  return (
    <MoreInfoDiv>
        <PopcornSVG />
        <InfoBox>
            <TextBox>
                <h3>Der ganze Netflix-Spaß schon ab 4,99 €.</h3>
                <p>Jetzt mit unserem günstigsten, werbefinanzierten Abo.</p>
            </TextBox>
            <Button>Weiter Infos</Button>
        </InfoBox>
    </MoreInfoDiv>
  )
}

export default MoreInfoSection
