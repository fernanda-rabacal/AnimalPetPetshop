import styled from "styled-components";

export const ServicesContainer = styled.div``

export const ServicesCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  margin-top: 3rem;

  @media(min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ServiceCard = styled.div`
  flex: 1 1 0;
  max-width: 35rem;
  border-radius: 10px;
  padding: 0;
  margin: 5px;
  border: 1px solid ${({theme}) => theme.colors["bg-dark"]};
  transition: 0.3s ease-in-out;

  img {
    width: 100%;
    max-height: 20rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
    -webkit-box-shadow: 2px 8px 32px 3px rgba(0,0,0,0.4);
    -moz-box-shadow: 2px 8px 32px 3px rgba(0,0,0,0.4);
    box-shadow: 2px 8px 32px 3px rgba(0,0,0,0.4);
  }
`