import styled from "styled-components";

export const PhotosAndProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;

  img {
    width: 12rem;
    height: 12rem;
  }
`