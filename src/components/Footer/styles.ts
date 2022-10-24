import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding-inline: 2rem;
  background-color: ${({theme}) => theme.colors["green-primary"]};
  color: ${({theme}) => theme.colors.white};
  width: 100%;
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