import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  padding-inline: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({theme}) => theme["green-primary"]};

  h1 {
    color: ${({theme}) => theme["white"]};
    font-size: 3rem;
  }
`

export const PagesNavigators = styled.div`
  border: none;
  background: transparent;
  display: flex;
  gap: 3rem;
  
  p {
    color: ${({theme}) => theme["white"]};
    font-size: 2.2rem;
  }
`

export const SocialLinks = styled.div`
  svg {
    color: ${({theme}) => theme["white"]};
  }
  display: flex;
  gap: 1rem
`