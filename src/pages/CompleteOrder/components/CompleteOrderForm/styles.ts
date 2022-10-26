import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  width: 58rem;
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
  grid-template-columns: 17.5rem 22.25rem 8.75rem;
  column-gap: 0.95rem;
  row-gap: 1.2rem;
  grid-auto-flow: dense;
  
  margin-block: 1rem;

  .cep {
    grid-column: span 3;
    max-width: 17.5rem;
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

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: 1px solid ${({theme}) => theme.colors["green-primary"]};
    border-radius: 4px;
    height: 6rem;
  }
`;

