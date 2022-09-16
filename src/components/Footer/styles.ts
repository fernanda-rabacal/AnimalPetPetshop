import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  background-color: ${({theme}) => theme.colors["green-primary"]};
  width: 100%;
`