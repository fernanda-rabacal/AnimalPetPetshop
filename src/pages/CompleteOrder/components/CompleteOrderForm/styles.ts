import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  max-width: 60rem;
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
  grid-template-columns: 3fr 4fr 1.5fr;
  column-gap: 0.95rem;
  row-gap: 1.2rem;
  grid-auto-flow: dense;
  margin-block: 1rem;

  .cep {
    grid-column: span 3;
    max-width: 13rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media(min-width: 700px) {
    grid-template-columns: 18rem 22.5rem 9rem;
    .cep {
      max-width: 18rem;
    }
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
  }

  @media(min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
`;

