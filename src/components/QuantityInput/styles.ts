import styled, { css } from "styled-components";

export interface QuantityInputContainerProps {
  size: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.headline};
    &:focus {
      outline: none;
    }
  }
  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}
  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.85rem;
  height: 1.85rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors["green-primary"]};
  transition: 0.4s;
  &:disabled {
    opacity: 0.4;
  }
  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["green-primary-dark"]};
  }
`;