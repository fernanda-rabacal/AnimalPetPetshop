import styled from "styled-components";
import { RegularText } from "../../../../components/tipography";

export const ProductCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  flex: 1;

  > div {
    display: flex;
    gap: 1.25rem;

    img {
      border-radius: 6px;
      width: 7rem;
      height: 8rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
    font-size: 1.2rem;
  }

  @media(min-width: 500px) {
    > p {
    font-size: 1.6rem;
  }
  }

  @media(min-width:700px) {
    > div {
    gap: 1.25rem;

    img {
      width: 10rem;
      height: 10rem;
    }
  }
}
`

export const ProductName = styled(RegularText)`
  max-width: 17rem;
  font-size: 1.1rem;

  @media(min-width: 400px) {
    max-width: 20rem;
  }
  
  @media(min-width: 550px) {
    font-size: 1.4rem;
    max-width: 24rem;
  }
`

export const ActionsContainer = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;

  > div {
    max-width: 7.5rem;
  }

  @media(min-width: 500px) {
    height: 3rem;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  height: 3rem;
  border: none;
  background: ${({ theme }) => theme.colors["base-button"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;

  p {
    font-size: 1.1rem;
  }

  svg {
    color: ${({ theme }) => theme.colors["green-primary"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
`;