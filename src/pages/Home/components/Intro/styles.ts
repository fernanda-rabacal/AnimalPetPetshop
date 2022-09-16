import styled from "styled-components"

export const IntroContainer = styled.section`
  text-align: center;
  display: grid;
    grid-template-columns: 56rem 1fr;
    grid-template-areas: 
    'A B'
    'C C';

  &::before{
    content: "";
    width: 100%;
    height: 60.5rem;
    background-color: ${({theme}) => theme["brand-greenlight"]};
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
    grid-area: B;
  }
`

export const ButtonContainer = styled.div`
  color: ${({theme}) => theme.white};
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
  background-color: ${({theme}) => theme["green-primary"]};
  border-radius: 4rem;
  transition: background 200ms;

  &:hover {
    background-color: ${({theme}) => theme["green-primary-dark"]};
  }
`

export const Benefits = styled.div`
  grid-area: A;
  text-align: left;
  align-self: center; 

  h4 {
    font-size: 1.4rem;
    color: ${({theme}) => theme["green-primary"]};;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
    line-height: 150%;
    letter-spacing: 0.08rem;
  }

  h1 {  
    font-size: 3.4rem;
    color: ${({theme}) => theme.headline};;
    line-height: 130%;
    margin-bottom: 2.4rem;
  }
`

export const Paragraph = styled.p`
  color: ${({theme}) => theme.paragraph};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 150%;
  margin-bottom: 3.2rem;
  
`

export const Stats = styled.section`
  width: 90%;
  padding-block: 5rem;
  padding-inline: 4rem;
  
  margin-inline: auto; 
  margin-bottom: 10rem;
  
  background-color: ${props => props.theme['brand-beige']};
  border: 1px solid ${props => props.theme['brand-greenlight']};

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
  width: 50rem;
  h3 {  
    font-size: 3rem;
    color: ${props => props.theme['bg-dark']}; 
    line-height: 130%;

    margin-top: 0;
    margin-bottom: .4rem ;
  }

  p {  
    color: ${props => props.theme['paragraph']}; 
    line-height: 150% ;
    font-size: 1.6rem;
  }

  &:not(:nth-child(1)) {
    padding-left: 3rem;
    border-left: 1px solid ${({theme}) => theme["green-primary"]};;
  }
`