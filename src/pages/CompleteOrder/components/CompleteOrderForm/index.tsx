import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/tipography";
import { AddressForm } from "./AddressForm";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";

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
    </CompleteOrderFormContainer>
  )
}