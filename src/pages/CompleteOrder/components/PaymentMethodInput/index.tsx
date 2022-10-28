import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { RegularText } from "../../../../components/tipography";
import { ContentContainer, PaymentMethodContainer } from "./styles";

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}


export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodProps>(({icon, label, id, ...props}, ref) => {
    return(
      <PaymentMethodContainer>
        <input ref={ref} type="radio" id={id} {...props} name="paymentMethod"/>
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </PaymentMethodContainer>
    )
  }
)  