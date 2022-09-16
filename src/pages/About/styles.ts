import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
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

export const History = styled.div`
  h4 {
    margin-bottom: 0;
    font-size: 1.6rem;
    color: ${({ theme }) => theme['green-primary']};
    text-transform: uppercase;
    line-height: 150%;
    letter-spacing: 0.08rem;
  }

  h2 {
    margin-top: 0;
    font-size: 3rem;
    line-height:3.9rem;
    color: ${({theme}) => theme.headline };
  }

  p {  
    margin-top: 2rem;
    margin-bottom: 5rem;
    color: ${({theme}) => theme.paragraph };;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;
  }
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
  border: 1px solid ${({theme}) => theme["brand-greenlight"]};
  border-radius: .6rem;
  background: ${({theme}) => theme["white"]};

  p {
    font-size: 1.8rem;
    margin-block: 3rem;
  }

  cite {    
    display: flex;
    align-items: center;
    gap: 1rem;
    color:${({theme}) => theme.paragraph};
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