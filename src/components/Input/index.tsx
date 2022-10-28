import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../tipography";
import { InputContainer, InputStyled, InputWrapper, OptionalText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  optionalText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({error, className, optionalText, ...props}, ref) => {
    return(
      <InputWrapper className={className}>
        <InputContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {optionalText && <OptionalText>{optionalText}</OptionalText>}
        </InputContainer>
        {error && <RegularText size="l">{error}</RegularText>}
      </InputWrapper>
    )
  }
)