import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-inline: 1rem;

  @media(min-width: 1244px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  padding: 3.5rem;
`;