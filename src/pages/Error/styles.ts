import styled from "styled-components";

export const ErrorPageContainer = styled.div` 
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {  
    font-size: 25rem;
    margin: 0;
    color: ${({theme}) => theme["green-primary"]};
  }

  h4 {  
    font-size: 4rem;
    margin: 0;
  }

  p {  
    color: ${({theme}) => theme["paragraph"]};
    font-size: 3rem;
    letter-spacing: 2px;
  }
`