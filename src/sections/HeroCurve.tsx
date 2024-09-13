import styled from "styled-components"

const CurveContainer = styled.div`
    width: 100%;
    left: 0%;    
    box-sizing: border-box;
    position: absolute;
    height: 11%;

    margin: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: solid .25rem transparent;
    border-top-left-radius: 200% 100%;
    border-top-right-radius: 200% 100%;
    border-bottom: none;
    background: radial-gradient(50% 500% at 50% -420%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100%), black;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin-top: -.25rem;
        border-radius: inherit;
        background: linear-gradient(to right, rgba(33, 13, 22, 1) 16%, rgba(184, 40, 105, 1), rgba(229, 9, 20, 1), rgba(184, 40, 105, 1), rgba(33, 13, 22, 1) 84%);
    }
`

const HeroCurve = () => {
  return (
    <CurveContainer>
      
    </CurveContainer>
  )
}

export default HeroCurve
