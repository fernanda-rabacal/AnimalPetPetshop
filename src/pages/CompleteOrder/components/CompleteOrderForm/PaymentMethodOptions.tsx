import { Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { PaymentMethodOptionsContainer } from "./styles";

export function PaymentMethodOptions() {
  const { colors } = useTheme()

  return(
    <PaymentMethodOptionsContainer>
      <div>
        <Money color={colors["green-primary"]} />
       <p>
        Cartão de Crédito
        </p> 
      </div>
      <div>
        <Money color={colors["green-primary"]} />
       <p>
        Cartão de Crédito
        </p> 
      </div>
      <div>
        <Money color={colors["green-primary"]} />
       <p>
        Cartão de Crédito
        </p> 
      </div>
    </PaymentMethodOptionsContainer>
  )
}