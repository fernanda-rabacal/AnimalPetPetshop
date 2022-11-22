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

export const ScrollRight = styled.button`
  width: 40rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 9999px;
    border: 1px solid ${({theme}) => theme.colors["brand-greenlight"]};
  }

  @media(min-width: 800px) {
    width: 20rem;
  }
`

export const ScrollLeft = styled(ScrollRight)`
    img {
      transform: rotate(180deg);
    }
`

