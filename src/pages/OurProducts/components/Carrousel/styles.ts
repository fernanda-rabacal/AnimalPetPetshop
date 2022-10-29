import styled from "styled-components"

export const Carrousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  overflow: hidden;
`

export const ScrollRight = styled.button`
  width: 60rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 100%
  }

  @media(min-width: 800px) {
    width: 40rem;
  }
`

export const ScrollLeft = styled(ScrollRight)`
    img {
      transform: rotate(180deg);
    }
`

