import { At, InstagramLogo, MapPin, Phone, WhatsappLogo } from "phosphor-react";
import { FormerTitle } from "../../../../components/tipography";
import { ButtonContainer } from "../Intro/styles";
import { ContactContainer } from "./styles";

export function Contact() {
  return(
    <ContactContainer className="container">
      <div>
        <header>
          <FormerTitle size="s">Entre em contato com a gente!</FormerTitle>
        </header>
        <div className="content">
          <ul>
            <li>
              <MapPin weight="fill" size={24} color={"#00856F"}/>
              Av. São Rafael, 2029 - Loja 16, 41253-190 <br />
              São Rafael - Salvador, BA
            </li>
            <li>  
              <At size={24} weight="bold" color={"#00856F"}/> 
              animalpett@outlook.com
            </li>
            <li>  
              <Phone size={24} weight="fill" color={"#00856F"}/> 
              (71) 3017-5890
            </li>
            <li>  
              <InstagramLogo size={24} weight="bold" color={"#00856F"}/> 
              animalpetsalvador
            </li>
          </ul>
          <a className="button" href="https://wa.me/5571993172074" target="_blank" >
            <ButtonContainer>
              <WhatsappLogo size={24} weight="bold" />               
              Agende agora Conosco!
            </ButtonContainer>
          </a>
        </div>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62215.56211293567!2d-38.500742573916874!3d-12.94158041807136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716109a7326eda5%3A0x8e5df67296cf60a!2sAnimal%20Pet!5e0!3m2!1spt-BR!2sbr!4v1654028266323!5m2!1spt-BR!2sbr" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </ContactContainer>
  )
}