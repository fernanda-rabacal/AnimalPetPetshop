import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  btnValue: string | ReactNode
}

export function Button(props: ButtonProps){
  return(
    <ButtonContainer 
      onClick={props.onClick} 
      className={props.className}
    >
      {props.btnValue}
    </ButtonContainer>
  )
}