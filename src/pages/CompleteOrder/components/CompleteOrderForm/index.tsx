import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../../../../components/tipography";
import { AddressForm } from "./AddressForm";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer, PaymentMethodButton, PaymentMethodOptionsContainer } from "./styles";
import { useFormContext, Controller } from "react-hook-form";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function CompleteOrderForm(){
  const { colors } = useTheme();
  const { control, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

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
        <Controller 
            control={control}
            name="paymentMethod"
            render={({field}) => {
              return(   
                <PaymentMethodOptionsContainer
                  onValueChange={field.onChange}
                  >
                  <PaymentMethodButton value="credit">
                    <CreditCard size={16} />
                    Cartão de crédito
                  </PaymentMethodButton>
                  <PaymentMethodButton value="debit">
                    <Bank size={16} />
                    Cartão de débito
                  </PaymentMethodButton>
                  <PaymentMethodButton value="money">
                    <Money size={16} />
                    Dinheiro
                  </PaymentMethodButton>
                  {errors.paymentMethod?.message && 
                    <RegularText>
                      {errors.paymentMethod?.message}
                    </RegularText>}
                </PaymentMethodOptionsContainer>
              )
            }}
          />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}