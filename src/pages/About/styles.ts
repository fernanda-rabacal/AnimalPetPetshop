import styled from "styled-components";
import { RegularText } from "../../components/tipography";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  img {
    width: 90%;
    border-radius: 18px;
    height: 45rem;
    max-width: 46rem;
  }
  
  @media(min-width: 1024px){
    margin-inline: auto;
    flex-direction: row;

    img {
      max-width: 60rem;
      height: 50rem;
    }
  }
 `

export const HistoryText = styled(RegularText)`
  margin-top: 2rem;
  max-width: 50rem;
`

export const Testimonials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media(min-width: 1024px) {
    flex-direction: row;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 2.4rem;
  max-width: 35rem;
  min-height: 35rem;
  text-align: left;
  font-size: 2rem;
  border: 1px solid ${({theme}) => theme.colors["brand-greenlight"]};
  border-radius: .6rem;
  background: ${({theme}) => theme.colors["white"]};

  p {
    font-size: 1.8rem;
    margin-block: 3rem;
  }

  cite {    
    display: flex;
    align-items: center;
    gap: 1rem;
    color:${({theme}) => theme.colors["paragraph"]};
  }

  img {
    width: 4rem;
  }

  cite img{
    width:4.2rem;
    height:4.2rem;
    object-fit: cover;
    border-radius: 3rem;
  }
`