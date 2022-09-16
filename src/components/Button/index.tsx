import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonComponent } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  btnValue: string | ReactNode
}

export function Button(props: ButtonProps){
  return(
    <ButtonComponent 
      onClick={props.onClick} 
      className={props.className}
    >
      {props.btnValue}
    </ButtonComponent>
  )
}