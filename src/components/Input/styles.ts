import styled from "styled-components";

export const InputContainer = styled.input`
  outline: none;
  height: 4rem;
  font-size: 1.3rem;
  border-radius: 5px;
  padding-left: 0.7rem;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({theme}) => theme.colors["base-input"]};
  transition: 0.4s;

  &:focus {
    border-color: ${({theme}) => theme.colors["green-primary"]};
  }
`