import styled from "styled-components";

export const OurProductsContainer = styled.div`
  section {
    display: flex;
  }
`
export const Carrousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  overflow: hidden;
`

export const Item = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors["brand-greenlight"]};
  margin: 10px;
  padding: 10px;
  width: 20.5rem;
  border-radius: 16px;
  flex: none;
`

export const Image = styled.div`
  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
`

export const Info = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    color: ${({theme}) => theme.colors["green-primary"]};
  }

  .name {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 10px 0;
  }

  .old-price {
    font-size: 1rem;
    text-decoration: line-through;
    flex-grow: 1;
    color: #e9195d
  }

  .price {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors["green-primary"]};
  }
`

export const ScrollRight = styled.button`
  width: 20rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 100%
  }
`

export const ScrollLeft = styled(ScrollRight)`
    img {
      transform: rotate(180deg);
    }
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    gap: 3px;
    p {
      line-height: 0.75rem;
    }
  }
`;

export const AddCartWrapper = styled.div`
  width: 9.5rem;
  > button {
    width: 2.575rem;
    height: 2.575rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors["green-primary"]};
    color: ${({ theme }) => theme.colors.headline};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;
    &:hover {
      background: ${({ theme }) => theme.colors["green-primary-dark"]};
    }
  }
`;