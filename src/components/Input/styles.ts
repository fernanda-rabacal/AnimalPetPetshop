import styled from "styled-components";

export const InputContainer = styled.input`
  border: none;
  height: 3.75rem;
  border-radius: 5px;
  padding-left: 0.7rem;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({theme}) => theme.colors["base-input"]};

  &:focus {
    border-color: ${({theme}) => theme.colors["green-primary"]};
  }
`