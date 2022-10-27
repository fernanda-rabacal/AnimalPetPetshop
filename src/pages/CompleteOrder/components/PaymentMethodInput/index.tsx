import { InputHTMLAttributes, ReactNode } from "react";
import { ContentContainer, PaymentMethodContainer } from "./styles";

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}


export function PaymentMethodInput({icon, label, id, ...props} : PaymentMethodProps){
  return(
    <PaymentMethodContainer>
      <input type="radio" id={id} {...props} name="paymentMethod"/>
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
}