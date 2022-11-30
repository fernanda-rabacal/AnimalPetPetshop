import { NavLink } from "react-router-dom";
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
  max-width: 35rem;
  border-radius: 5px;
  padding: 0;
  border: 1.5px solid ${({theme}) => theme.colors["base-button"]};
  transition: 0.3s ease-in-out;
  text-align: justify;

  img {
    width: 100%;
    max-height: 20rem;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  > div {
    min-height: 20rem;  
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
  }
`

export const CardFooter = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({theme}) => theme.colors["base-button"]};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.paragraph};
  font-weight: 700;
`