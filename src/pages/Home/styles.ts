import styled from "styled-components"

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
`