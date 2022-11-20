import styled from "styled-components"

export const FilterContainer = styled.aside`
  width: 30rem;
  margin-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  h1 {
    font-size: 2rem;
  }
`
export const FilterOption = styled.div`
  margin-top: 1.5rem;

  label {
    color: ${({theme}) => theme.colors.headline};
    font-size: 1.8rem;
    display: flex;
    gap: 1rem;
    align-items: center; 

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      z-index: 1;

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
      height: 2rem;
      width: 2.2rem;
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