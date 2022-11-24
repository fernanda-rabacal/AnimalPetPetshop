import styled from "styled-components"

export const FilterContainer = styled.aside`
  display: flex;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colors["green-primary"]};
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 2.6rem;
    font-weight: 700;
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
        background-color: ${({theme}) => theme.colors.headline};
        border-color: ${({theme}) => theme.colors.headline};
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
      border: 3px solid ${({theme}) => theme.colors.headline};;
      border-radius: 3px;

      &:after {
        content: "";
        position: absolute;
        display: none;
        left: .3rem;
        width: .5rem;
        height: 0.8rem;
        border: solid ${({theme}) => theme.colors.white};
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

`