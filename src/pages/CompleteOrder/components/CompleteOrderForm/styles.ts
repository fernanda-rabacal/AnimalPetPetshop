import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;


export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 18rem 22.5rem 9rem;
  column-gap: 0.95rem;
  row-gap: 1.2rem;
  grid-auto-flow: dense;
  
  margin-block: 1rem;

  .cep {
    grid-column: span 3;
    max-width: 18rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`;
