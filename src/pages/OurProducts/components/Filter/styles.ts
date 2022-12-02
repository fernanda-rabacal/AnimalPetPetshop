import styled from "styled-components"

export const FilterContainer = styled.aside`
  grid-area: A;
  width: 30%;
  display: flex;
  flex-direction: column;

  .inactive {
    opacity: 0;
    display: none;
  }

  .active {
    position: absolute;
    margin-top: 4rem;
    z-index: 10;
    opacity: 1;
    display: initial;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 0 5px gray;
    border-radius: 6px;
    padding: 2rem;
  }


  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    border-bottom: 1px solid transparent;

    &:hover {
      border-color: ${({ theme }) => theme.colors["green-primary"]};
    }
  }

  p {
    color: ${({ theme }) => theme.colors["green-primary"]};
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 700;
  }

  h1 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["green-primary"]};
    border-bottom: 1px solid ${({ theme }) => theme.colors["green-primary"]};

    &:not(:first-child) {
      margin-block: 2.5rem;
    }
  }

  @media(min-width: 700px) {
    grid-area: B;

    p {
      font-size: 2.6rem;
    }

    h1 {
      font-size: 1.8rem;
      margin-block: 2.5rem;
    }

   .active, .inactive {
      display: initial;
      opacity: 1;
      background-color: transparent;
      box-shadow: none;
      border-radius: none;
      padding: 0;
    }

    button {
      display: none;
    }
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

export const FilterOption = styled.li`
  margin-top: 2rem;

  label {
    color: ${({theme}) => theme.colors.paragraph};
    font-size: 1.2rem;
    display: flex;
    gap: 1rem;
    align-items: center; 

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      z-index: 1;
      height: 1.4rem;
      width: 1.4rem;

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
      height: 1.4rem;
      width: 1.4rem;
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

  @media(min-width: 700px) {
    label {
      font-size: 1.6rem;

      input {  
        height: 1.8rem;
        width: 1.8rem;
      }

      .checkmark {
        height: 1.8rem;
        width: 1.8rem;
      }
    }
  }
`