import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  padding-inline: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({theme}) => theme.colors["green-primary"]};

  h1 {
    color: ${({theme}) => theme.colors["white"]};
    font-size: 1.5rem;
  }

  @media(min-width: 700px) {
    padding-inline: 3rem;

    h1 {
      font-size: 3rem;
    }
  }
`

export const PagesNavigators = styled.div`
  border: none;
  background: transparent;
  display: flex;
  gap: 1.8rem;
  
  p {
    color: ${({theme}) => theme.colors["white"]};
    font-size: 1.2rem;
  }

  @media(min-width: 700px) {
    gap: 3rem;

    p {
      font-size: 2.2rem;
    }
  }
`

export const SocialLinks = styled.div`
  svg {
    color: ${({theme}) => theme.colors["white"]};
    width: 2rem;
  }
  display: flex;
  gap: 1rem;

  @media(min-width: 700px) {
    svg {
      width: 3rem;
    }
  }
`