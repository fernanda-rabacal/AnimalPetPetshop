import styled from "styled-components";
import { ButtonContainer } from "../../components/Button/styles";

export const ErrorPageContainer = styled.div` 
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.1rem;

  h1 {  
    font-size: 25rem;
    margin: 0;
    color: ${({theme}) => theme.colors['green-primary']};
  }

  h4 {  
    font-size: 4rem;
    margin: 0;
  }

  p {  
    color: ${({theme}) => theme.colors['paragraph']};
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`
