import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  margin-top: 3.5rem;

  @media(min-width: 700px) {
    width: 60rem;
  }
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
  max-height: 58rem;

  > div {
    margin-bottom: 2rem;
    overflow-y: auto;
    padding-right: 1rem;
  }

  @media(max-width: 500px) {
    padding-inline: 1.2rem;
  }
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`