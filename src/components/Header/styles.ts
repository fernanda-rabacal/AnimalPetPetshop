import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  padding-inline: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px gray;

  h1 {
    color: ${({theme}) => theme.colors.black};
    font-size: 1.2rem;
  }

  @media(min-width: 700px) {
    padding-inline: 3rem;

    h1 {
      font-size: 2.2rem;
    }
  }

  @media(min-width: 1024px) {
    h1 {
      font-size: 3rem;
    }
  }
`

export const PagesNavigators = styled.div`
  border: none;
  background: transparent;
  display: flex;
  gap: 1rem;
  
  p {
    color: ${({theme}) => theme.colors.black};
    font-size: 1.2rem;
    border-bottom: 2px solid transparent;
    padding-block: 2.4rem;
    transition: 0.2s;

    &:hover {
      border-color: ${({theme}) =>  theme.colors["green-primary"]};
    }
  }

  @media(min-width: 700px) {
    gap: 2rem;

    p {
      font-size: 1.6rem;
      padding-block: 2rem;
    }
  }

  @media(min-width: 900px) {
    gap: 3rem;

    p {
      font-size: 2rem;
      padding-block: 1.8rem;

    }
  }
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;


export const LoginWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors["green-primary"]};
  background: ${({ theme }) => theme.colors["bg-green-light"]};

  &:hover + .dialog {
    opacity: 1;
    visibility: visible;
  }
  
  p {
    font-size: 1.2rem;
  }

  svg {
    color: ${({theme}) => theme.colors["green-primary"]};
    width: 1.5rem;
    height: 1.5rem;
  }
  
  @media(min-width: 700px) {
    p {
    font-size: 1.6rem;
  }
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media(min-width: 1024px) {
    padding: 1rem;

    p {
      font-size: 1.8rem;
    }
  }
`

export const LoginDialog = styled.span`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 9rem;
  right: 3rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px gray;
  color: #333;
  display: inline-block;
  font: 16px/24px sans-serif;
  padding: 12px 24px;
  font-size: 1rem;
  transition: 0.1s ease-in-out;

  &:hover {
    opacity: 1;
    visibility: visible;
  }

/* Criando o triângulo */

&.active:after,
&.active:before {
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #fff;
    top: -15px;
    content: '';
    left: 50%;
    margin-left: -15px;
    position: absolute;
    z-index: 100;
  }
  
  /* Criando a borda do triângulo */
  
  &.active:before {
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 18px solid;
    border-top-color: inherit;
    top: -18px;
    margin-left: -18px;
}

  p, a {
    font-size: 1.2rem;
  }

  button {
    background: ${({theme}) => theme.colors["green-primary"]};
    border: 1px solid transparent;
    color: ${({theme}) => theme.colors.white};
    width: 100%;
    padding: 1.5rem;
    border-radius: 4px;
    margin-bottom: 2rem;
    transition: 0.2s;

    &:hover {
      background: transparent;
      border-color: ${({theme}) => theme.colors["green-primary"]};
      color: ${({theme}) => theme.colors["green-primary"]};
    }
  }
`

export const CartWrapper = styled(LoginWrapper)`
  padding: 0.5rem;
  background: transparent;

  span {
    transition: 0.2s;
    position: absolute;
    width: 1.45rem;
    height: 1.45rem;
    border-radius: 50%;
    top: calc(-1.35rem / 2);
    right: calc(-1.35rem / 2);
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors["green-primary"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 700px){
    span {  
      font-size: 1.2rem;
      width: 1.85rem;
      height: 1.85rem;
      top: calc(-1.85rem / 2);
      right: calc(-1.85rem / 2);
    }
  }
`