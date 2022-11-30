import styled from "styled-components";

export const OurProductsContainer = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
`

export const ProductsAndFilters = styled.div`
  display: grid;
  grid-template-areas:"A A"
                      "B C";

  > div {
    grid-area: A;
    display: flex;
    margin-left: auto;
    margin-bottom: 2rem;
    align-items: center;
    gap: 1rem;
    
    span {
      color: ${({ theme }) => theme.colors["green-primary"]};
      font-weight: 700;
    }
    
    select {
      padding: 0.4rem 1rem;
      border: 1px solid ${({theme}) => theme.colors["base-input"]};
      border-radius: 6px;
    }
  }
`


export const ProductsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;

  @media(min-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`