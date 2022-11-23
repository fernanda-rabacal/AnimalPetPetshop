import styled from "styled-components";

interface ButtonProps {
  size: "order" | "backToHome"
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${({size}) => size === "order" && "75%"};
  align-self: center;
  padding: 1rem 2.8rem;
  height: 4rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  background: ${({ theme }) => theme.colors["green-primary"]};
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
  border: none;
  border-radius: 6px;
  margin-top: 1.5rem;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["green-primary-dark"]};
  }

  @media(max-width: 500px){
    font-size: 1.6rem;
  }
`;
