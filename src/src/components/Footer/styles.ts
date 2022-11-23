import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding-inline: 2rem;
  background-color: ${({theme}) => theme.colors["green-primary"]};
  color: ${({theme}) => theme.colors.white};
  width: 100%;

  > p {
    font-size: 1rem;
  }

  @media(min-width: 700px) {
    > p {
    font-size: 1.6rem;
  }
  }
`
export const SocialLinks = styled.div`
  svg {
    color: ${({theme}) => theme.colors["white"]};
    width: 2.4rem;
  }
  display: flex;
  gap: 1rem;

  @media(min-width: 700px) {
    gap: 2rem;
    svg {
      width: 3rem;
    }
  }
`