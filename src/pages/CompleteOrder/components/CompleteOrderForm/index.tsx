import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/tipography";
import { AddressForm } from "./AddressForm";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderForm(){
  const { colors } = useTheme();

  return(
    <CompleteOrderFormContainer>
      <TitleText
       size="l">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
      <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors["green-primary"]} size={22} />}
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar color={colors["green-primary"]} size={22} />}
          />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}