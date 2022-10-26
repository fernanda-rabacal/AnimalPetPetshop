import { useTheme } from "styled-components";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedProducts";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage(){
  const { colors } = useTheme();

  return(
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  )
}