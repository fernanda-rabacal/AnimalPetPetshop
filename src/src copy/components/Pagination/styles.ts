import styled, {css} from "styled-components";

export const PaginationContainer = styled.ul`
  margin-top: 2rem;
  padding-left: 40rem;
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: center;
`

interface PaginationItemProps {
  disabled?: boolean
  selected?: boolean
}

export const PaginationItem = styled.li<PaginationItemProps>`
  padding: 0 1.25rem;
  height: 2.2rem;
  text-align: center;
  margin: auto 0.4rem;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 1rem;
  line-height: 1.43;
  font-size: 1rem;
  min-width: 2.2rem;
  transition: 0.2s;
  cursor: pointer;

  @media(min-width: 700px) {
    font-size: 2rem;
    min-width: 3.2rem;
    height: 3.2rem;
  }
  
  ${({disabled}) => disabled && css`
    pointer-events: none;

    > div.arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }  
  `}

  ${({selected}) => selected && css`
    background-color: ${({theme}) => theme.colors["green-primary"]}; 
    color: ${({ theme }) => theme.colors.white};
  `}

  &.dots:hover {
    background-color: transparent;
    color: black;
    cursor: default;
  }

  &:hover {
    background-color: #008537DD;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`

export const Arrow = styled.div`
  &::before {
    position: relative;
    content: '';
    /* Usando uma escala em, as setas terão o tamanho acompanhando a fonte */
    display: inline-block;
    width: 0.6em;
    height: 0.6em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }

  &.left {
    transform: rotate(-135deg);
  }

  &.right {
    transform: rotate(45deg);
  }

  
`