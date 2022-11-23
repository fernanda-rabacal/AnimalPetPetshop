import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { FooterContainer, SocialLinks } from "./styles"

export function Footer(){
  const currentYear = new Date().getFullYear();

  return(
    <FooterContainer>
      <p> © Animal Pet, {currentYear}. Todos os direitos reservados
      </p>

      <SocialLinks>
          <a rel='noreferrer' target="_blank" 
            href="https://www.instagram.com/animalpetsalvador">
            <InstagramLogo size={32}/>
            </a>
          <a rel='noreferrer' target="_blank" 
            href="https://www.facebook.com/animalpetsalvador">
              <FacebookLogo size={32}/>
            </a>
          <a rel='noreferrer' target="_blank" 
            href="https://wa.me/5571993172074" >
              <WhatsappLogo size={32}/>
            </a>
        </SocialLinks>
    </FooterContainer>
  )
}