import styled from "styled-components";
import { ButtonContainer } from "../../components/Button/styles";

export const ErrorPageContainer = styled.div` 
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {  
    font-size: 15rem;
    color: ${({theme}) => theme.colors['green-primary']};
  }

  h4 {  
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  p {  
    color: ${({theme}) => theme.colors['paragraph']};
    font-size: 1.6rem;
    margin-bottom: 5rem;
  }

  @media(min-width: 700px) {
    h1 {
      font-size: 20rem;
    }

    h4 {  
      font-size: 3.5rem;
      margin-bottom: 0;
    }

    p {  
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
`
