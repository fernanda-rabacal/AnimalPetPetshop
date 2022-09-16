import styled from "styled-components";
import { RegularText, TitleText } from "../../components/tipography";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  img {
    border-radius: 18px;
    height: 46rem;
  }
`


export const AboutTitle = styled(TitleText)`
  margin-bottom: 0; 
  text-transform: uppercase;
  letter-spacing: 0.08rem;
`

export const AboutSubtitle = styled(TitleText)`
  margin-top: 0;
  line-height: 3.9rem;
  margin-bottom: 5rem;
`

export const HistoryText = styled(RegularText)`
  margin-top: 2rem;
`

export const Testimonials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.4rem;
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