import styled from "styled-components"
import TVSVG from "./TVSVG"
import ArrowSVG from "./ArrowSVG"
import Glas from "./Glas"
import FacesSVG from "./FacesSVG"

const ReasonsCardWrapper = styled.div`
    background: linear-gradient(149deg, #192247 0%, #210e17 96.86%);
    border-radius: 1rem;
    padding: 1.5rem;
    flex: 0 0 43%;
    width: -webkit-fill-available;

    & h3 {
        color: rgb(255, 255, 255);
        font-size: 1.7rem;
        font-weight: 500;
        margin-bottom: 0;
    }

    & p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.3rem;
        font-weight: 400;
    }

    @media (max-width: 1200px) {
        flex: 0 0 93%;
    }
`

const SVGDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`


const ReasonsCard = ({ CardTitle, CardText, SVGStyle }: { CardTitle: string, CardText: string, SVGStyle: string }) => {
    let SVGToBeUsed;

    if(SVGStyle === 'TV'){
        SVGToBeUsed = <TVSVG />;
    } else if (SVGStyle === 'Arrow') {
        SVGToBeUsed = <ArrowSVG />;
    } else if (SVGStyle === 'Glas') {
        SVGToBeUsed = <Glas />
    } else if (SVGStyle === 'Faces') {
        SVGToBeUsed = <FacesSVG />
    }


  
    return (
    <ReasonsCardWrapper>
        <h3>{CardTitle}</h3>
        <p>{CardText}</p>
        <SVGDiv>
            {SVGToBeUsed}
        </SVGDiv>
      
    </ReasonsCardWrapper>
  )
}

export default ReasonsCard
