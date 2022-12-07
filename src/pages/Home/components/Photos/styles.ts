import styled from "styled-components";

export const PhotosAndProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-block: 8rem;

  div h1 {
    text-align: center;
    margin-block: 5rem;
    font-size: 3rem;
  }
`

export const ProductsDisplay = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`

export const ProductsDisplayItem = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors["base-hover"]};
    border-radius: 100%;
    width: 12rem;
    height: 12rem;
  }

  img {
    width: 8rem;
    height: 8rem;
  }
`