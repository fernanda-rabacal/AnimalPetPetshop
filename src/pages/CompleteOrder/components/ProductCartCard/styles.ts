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
      width: 10rem;
      height: 10rem;
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
  }
`

export const ProductName = styled(RegularText)`
  max-width: 24rem;
`

export const ActionsContainer = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;

  > div {
    max-width: 7.5rem;
    height: 150%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: 1.2rem;
  height: 150%;
  border: none;
  background: ${({ theme }) => theme.colors["base-button"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors["green-primary"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
`;