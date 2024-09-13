import styled from "styled-components"
import ReasonsCard from "../components/ReasonsCard"

const ReasonsWrapper = styled.div`
    padding: 3rem 10rem;

    & h2 {
        color: white;
    }

    @media (max-width: 800px){
        padding: 3rem 3rem;
    }

`

const CardWrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`

const ReasonsSection = () => {
  return (
    <ReasonsWrapper>
        <h2>Mehr Gründe für eine Mitgliedschaft</h2>
        <CardWrapper>
            <ReasonsCard 
                CardTitle="Auf Ihrem Fernseher"
                CardText="Streamen Sie mit Smart-TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray-Player u. v. m."
                SVGStyle="TV"
            />
            <ReasonsCard 
                CardTitle="Serien herunterladen und offline ansehen"
                CardText="Lieblingstitel ganz leicht speichern und jederzeit ansehen"
                SVGStyle="Arrow"
            />
            <ReasonsCard 
                CardTitle="Auf allen Geräten"
                CardText="Sie können unbegrenzt Filme und Serien auf Ihrem Smartphone, Tablet, Laptop und Fernseher ansehen."
                SVGStyle="Glas"
            />
            <ReasonsCard 
                CardTitle="Profile für Kinder erstellen"
                CardText="Schicken Sie Kinder auf Abenteuer mit ihren Lieblingsfiguren in einem speziell auf ihre Bedürfnisse abgestimmten Kids-Bereich, der ohne Aufpreis in Ihrer Mitgliedschaft inbegriffen ist."
                SVGStyle="Faces"
            />
        </CardWrapper>
    </ReasonsWrapper>
  )
}

export default ReasonsSection
