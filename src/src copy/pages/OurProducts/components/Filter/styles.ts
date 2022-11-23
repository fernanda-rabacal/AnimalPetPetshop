import styled from "styled-components"

export const FilterContainer = styled.aside`
  display: flex;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colors["green-primary"]};
  }

  h1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors["green-primary"]};
    border-bottom: 1px solid ${({ theme }) => theme.colors["green-primary"]};
  }
  
  div {
    margin-top: 2rem;
  }

  @media(min-width: 1024px) {
    width: 25rem;
    margin-block: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  `
export const FilterOption = styled.div`
  label {
    color: ${({theme}) => theme.colors.paragraph};
    font-size: 1.6rem;
    display: flex;
    gap: 1rem;
    align-items: center; 

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      z-index: 1;
      height: 1.8rem;
      width: 1.8rem;

      &:checked ~ .checkmark {
        background-color: ${({theme}) => theme.colors["green-primary"]};
        border-color: ${({theme}) => theme.colors["green-primary"]};
      }

      &:checked ~ .checkmark:after {
        display: block;
      }
    }

    .checkmark {
      position: relative;
      height: 1.8rem;
      width: 1.8rem;
      background-color: transparent;
      border: 3px solid ${({theme}) => theme.colors["green-primary"]};;
      border-radius: 3px;

      &:after {
        content: "";
        position: absolute;
        display: none;
        left: .5rem;
        width: .5rem;
        height: 1rem;
        border: solid ${({theme}) => theme.colors.white};
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

`