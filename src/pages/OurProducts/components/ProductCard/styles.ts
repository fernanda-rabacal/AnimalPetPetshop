import styled from "styled-components"

export const Item = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors["brand-greenlight"]};
  margin: 10px;
  padding: 10px;
  width: 15rem;
  border-radius: 16px;
  flex: none;

  @media(min-width: 700px) {
    width: 19rem;
  }
  `

export const Image = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 60%;
    height: 60%;
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
    border-radius: 10px;
    color: ${({theme}) => theme.colors["green-primary"]};
    font-size: 1.4rem;
    font-weight: 700;
    margin: 8px 0;
  }
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;

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