import { useState } from "react"
import { styled } from "styled-components"

const FAQBlock = styled.div`
    dispaly: flex;
    flex-direction: column;
    gap: .1rem;
    width: -webkit-fill-available;
`

const QuestionDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: rgb(45, 45, 45);
    padding: 1.5rem;

    & p {
        font-size: 22px;
        font-weight: 400;
    }

    &:hover {
        cursor: pointer;
        background-color: rgb(65, 65, 65);
    }
`

const StyledSVG = styled.div<{ $isExpanded?: boolean }>`
    transform: ${props => props.$isExpanded ? 'rotate(-45deg)' : 'rotate(0deg)'};
    transition: transform 0.25s cubic-bezier(0.5, 0, 0.1, 1);
`;

const AnswerDiv = styled.div<{ $isExpanded?: boolean }>`
    opacity: ${props => props.$isExpanded ? '1' : '0'};
    max-height: ${props => props.$isExpanded ? '500px' : '0'};
    padding: ${props => props.$isExpanded ? '1.5rem' : '0 1.5rem'};
    overflow: hidden;
    transition: opacity 0.25s ease, max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
    background-color: rgb(45, 45, 45);
    width: -webkit-fill-available;

    border-top: 1px solid black;

    & p {
        font-size: 22px;
        font-weight: 400;
        margin: 0;
    }
`

const SVG = <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 36 36" width="36" height="36" data-icon="PlusLarge" aria-hidden="true" className="elj7tfr3 default-ltr-cache-1k5iouc-Icon-StyledAccordionIcon e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>


const Question = ({ Question, FirstParagraph, SecondParagraph }: { Question: string, FirstParagraph: string, SecondParagraph?: string }) => {
    const [ isExpanded, setIsExpanded ] = useState<boolean>(false);
  
    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <FAQBlock>
            <QuestionDiv
                onClick={handleClick}
            >
                <p>{Question}</p>
                <StyledSVG $isExpanded={isExpanded}>
                    {SVG}
                </StyledSVG>
            </QuestionDiv>
            <AnswerDiv $isExpanded={isExpanded}>
                <p>{FirstParagraph}</p>
                {SecondParagraph &&
                    <>
                        <br />
                        <p>{SecondParagraph}</p>
                    </>
                }
            </AnswerDiv>
        </FAQBlock>
    )
}

export default Question
