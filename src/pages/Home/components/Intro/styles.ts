import styled from "styled-components"
import { RegularText, TitleText } from "../../../../components/tipography"

export const IntroContainer = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;

  &::before{
    content: "";
    width: 100%;
    height: 120.5rem;
    background-color: ${({theme}) => theme.colors["brand-greenlight"]};
    display: block;

    position: absolute;
    top: 0;
    left:0;
    z-index: -1; 
}

  img {  
    height: 37.2rem;
    display: block;
    object-position: 0 1.7rem;
  }

  @media(min-width: 1024px) {
    text-align: center;
    display: grid;
    grid-template-columns: 56rem 1fr;
    grid-template-areas: 
    'A B'
    'C C';

  &::before{
    height: 60.5rem;
  }

  img {  
    grid-area: B;
  }
  }
`

export const ButtonContainer = styled.div`
  color: ${({theme}) => theme.colors.white};
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  margin-right: auto;
  margin-left: auto;
  margin-bottom: 6rem;
  padding: 1rem 3rem;
  width: fit-content;
  background-color: ${({theme}) => theme.colors["green-primary"]};
  border-radius: 4rem;
  transition: background 200ms;

  &:hover {
    background-color: ${({theme}) => theme.colors["green-primary-dark"]};
  }
`

export const Benefits = styled.div`
  grid-area: A;
  text-align: left;
  align-self: center; 
`

export const BenefitsTitle = styled(TitleText)`
  margin-bottom: 2.4rem;
`

export const BenefitsSubtitle = styled(TitleText)`
  margin-bottom: 1.6rem;
  text-transform: uppercase;
`

export const Paragraph = styled(RegularText)`
  margin-bottom: 3.2rem; 

  @media(max-width: 1024px) {
    font-size: 1.8rem;
  } 
`

export const StatTitle = styled(TitleText)`
  margin-top: 0;
  margin-bottom: .4rem ;

  @media(max-width: 800px){
    font-size: 1.8rem
  }
`

export const Stats = styled.section`
  width: 90%;
  padding-block: 5rem;
  padding-inline: 4rem;
  
  margin-inline: auto; 
  margin-bottom: 5rem;
  
  background-color: ${({theme}) => theme.colors['brand-beige']};
  border: 1px solid ${({theme}) => theme.colors['brand-greenlight']};

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  border-radius: .6rem; 

  @media(min-width: 1024px) {
    width: 100%;
    grid-area: C;
    display: flex;
    flex-direction: row;
  }
`

export const Stat = styled.div`
  
  &:not(:nth-child(1)) {
    padding-top: 3rem;
    border-top: 1px solid ${({theme}) => theme.colors["green-primary"]};
  }
  

  @media(min-width: 1024px) {
    width: 50rem;

    &:not(:nth-child(1)) {
      padding-left: 3rem;
      border-left: 1px solid ${({theme}) => theme.colors["green-primary"]};
      padding-top: 0;
      border-top: none;
    }
  }
`
