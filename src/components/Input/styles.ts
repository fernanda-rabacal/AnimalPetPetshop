import styled from "styled-components";

export const InputContainer = styled.input`
  outline: none;
  height: 4.5rem;
  font-size: 1.4rem;
  border-radius: 5px;
  padding-left: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({theme}) => theme.colors["base-input"]};
  transition: 0.4s;

  &:focus {
    border-color: ${({theme}) => theme.colors["green-primary"]};
  }
`