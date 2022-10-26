import { useTheme } from "styled-components";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage(){
  const { colors } = useTheme();

  return(
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
    </CompleteOrderContainer>
  )
}