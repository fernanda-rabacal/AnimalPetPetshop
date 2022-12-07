import styled from "styled-components"

export const CarrouselContainerStyled = styled.section`
  display: flex;
`

export const Carrousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  overflow: hidden;
`

export const ScrollButton = styled.button`
  width: 40rem;
  display: flex;
  align-items: center;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 9999px;
    border: 1px solid ${({theme}) => theme.colors["base-hover"]};
    color: ${({theme}) => theme.colors["green-primary"]};
    transition: 0.2s;

    &:hover {
      box-shadow: 0 0 2px gray;
    }
  }

  @media(min-width: 800px) {
    width: 20rem;
  }
`
