import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      border-color: ${theme.colors["green-primary"]};
    `}
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  gap: 1rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  background: ${({ theme }) => theme.colors["base-button"]};
  border: 1px solid ${({theme}) => theme.colors["base-button"]};
  border-radius: 4px;
  height: 6rem;
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors["green-primary"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  user-select: none;

`