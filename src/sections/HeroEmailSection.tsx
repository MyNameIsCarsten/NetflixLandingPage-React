import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";
import { SetStateAction, useState } from "react";

const EmailLabel = styled.label`
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.7);
`

const EmailInput = styled.input`
    font-size: 20px;
    font-weight: bold;    
    line-height: 1.5;
    width: 100%;
    background-color: transparent;
    border: none;
    color: white;

    &:focus, &:focus-visible {
      outline: none;
      box-shadow: none;
      border: none;
    }

    /* For Firefox */
    &::-moz-focus-inner {
      border: 0;
    }

    @media (max-width: 500px){
        font-size: 16px;
    }
`

const EmailDiv = styled.div`
    background-color: rgb(121 175 255 / 15%);
    border: 1px solid #2bb871;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    width: -webkit-fill-available;
    transition: background-color 0.3s, border 0.3s;

    &:focus-within {
        outline: 2px solid white;
        outline-offset: 2px;
    }
`;

const EmailH3 = styled.h3`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    max-width: 40rem;

    @media (max-width: 500px){
        font-size: 16px;
    }
`

const EmailAndButtonDiv = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    & a {
        font-size: 26px;
        padding: 0 2rem;
    }

    @media (max-width: 500px){
        flex-direction: column;
    }

    & a {
            
        @media (max-width: 800px){
            padding: 1.5rem 2rem;
        }
    
    }
`

const HeroEmailSection = () => {

    const [ email, setEmail ] = useState<string>('John@doe.de')

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    }

  return (
    <form>
        <EmailH3>Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre Mitgliedschaft zu beginnen oder zu reaktivieren.</EmailH3>
        <EmailAndButtonDiv>
            <EmailDiv>
                <EmailLabel>E-Mail-Adresse</EmailLabel>
                <EmailInput 
                    autoComplete="email" 
                    minLength={5} 
                    maxLength={50} 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={handleChange} 
                    data-autofill="true"
                ></EmailInput>
            </EmailDiv>
            <PrimaryButton ButtonText="Loslegen" showSVG={true} />
        </EmailAndButtonDiv>
    </form>
  )
}

export default HeroEmailSection
