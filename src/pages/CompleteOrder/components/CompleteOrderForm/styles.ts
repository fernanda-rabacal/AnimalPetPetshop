import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div``

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;


export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 13.5rem 17.25rem 4.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 13.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;
