import { FooterContainer } from "./styles"

export function Footer(){
  const currentYear = new Date().getFullYear();

  return(
    <FooterContainer>
      <p> © Animal Pet, {currentYear}. Todos os direitos reservados</p>
    </FooterContainer>
  )
}