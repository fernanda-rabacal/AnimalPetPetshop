import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  btnValue: string | ReactNode
  size: "order" | "backToHome"
}

export function Button({size, btnValue, ...props}: ButtonProps){
  return(
    <ButtonContainer 
      size={size}
      onClick={props.onClick} 
      className={props.className}
    >
      {btnValue}
    </ButtonContainer>
  )
}