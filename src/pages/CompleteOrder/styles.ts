import styled from "styled-components";

export const CompleteOrderContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding-inline: 1rem;

  @media(min-width: 1024px) {
    flex-direction: row;
  }
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;