import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  btnValue: string | ReactNode
}

export function Button(props: ButtonProps){
  return(
    <button onClick={props.onClick} className={props.className}>
      {props.btnValue}
    </button>
  )
}