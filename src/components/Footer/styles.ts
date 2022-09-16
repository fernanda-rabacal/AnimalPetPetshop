import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  background-color: ${({theme}) => theme["green-primary"]};
  width: 100%;
`