import styled from "styled-components";

export const OurProductsContainer = styled.div`
  section {
    display: flex;
    padding-bottom: 5rem;
    margin-bottom: 5rem;
  }
  
  section:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.colors["base-button"]};
  }  
`
