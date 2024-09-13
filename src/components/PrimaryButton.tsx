import styled from "styled-components"

const PrimaryButtonWrapper = styled.a`
    display: flex;    
    color: white;    
    background-color: rgb(229, 9, 20);
    padding: 4px 24px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 18px;
    line-height: 14px;
    min-height: 32px;
    align-items: center;
    cursor: pointer;
`

const PrimaryButton = ({ ButtonText, showSVG }: { ButtonText: string, showSVG: boolean }) => {
  return (
    <PrimaryButtonWrapper role="button">
        {ButtonText}
        { showSVG &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
        }
    </PrimaryButtonWrapper>
  )
}

export default PrimaryButton
