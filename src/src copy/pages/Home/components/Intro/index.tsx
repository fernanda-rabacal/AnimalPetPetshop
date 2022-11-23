import DogCat from '../../../../assets/dog-cat-puppy-kitten.png';
import { Benefits, BenefitsSubtitle, BenefitsTitle, ButtonContainer, IntroContainer, Paragraph, Stat, Stats, StatTitle } from './styles';
import { WhatsappLogo } from 'phosphor-react';
import { RegularText } from '../../../../components/tipography';


export function Intro() {
  return(
    <IntroContainer className="container">
      <Benefits>
        <BenefitsTitle size="l">ANIMAL PET</BenefitsTitle>
        <BenefitsSubtitle color="green-primary">Cuidado completo com o seu animalzinho</BenefitsSubtitle>
        <Paragraph size="l">
          A Animal Pet possui uma estrutura completa para cuidar do seu pet, desde consultório veterinário, área de banho e tosa, além de acessórios e rações da maior qualidade! Estamos abertos de segunda a sabado, das 8hrs às 18hrs
        </Paragraph>

        <a target="_blank" rel="noreferrer" href="https://wa.me/5571993172074" >
          <ButtonContainer>
            <WhatsappLogo size={32}/>
            <p>Agende agora Sua tosa</p>
          </ButtonContainer>
        </a>
      </Benefits>

      <img className="home-img" src={DogCat} alt="two cats and two dogs side by side" />
            
      <Stats>
        <Stat>
          <StatTitle color="bg-dark" size="l">Consultório</StatTitle>
          <RegularText>
            Possuimos veterinários disponíveis de segunda à sabado, das 09hrs até as 17hrs, com os equipamentos e a estrutura completa para melhor te atender.
          </RegularText>
        </Stat>

        <Stat>
          <StatTitle color="bg-dark" size="l">Banho e Tosa</StatTitle>
          <RegularText>
            Temos várias opções de banho e tosa para cães e gatos, como tosa higiênica, tosa completa, tosa bebê, além de corte de unha e limpeza de ouvidos.
          </RegularText>
        </Stat>

        <Stat>
          <StatTitle color="bg-dark" size="l">Taxi Pet</StatTitle>
          <RegularText>
            Buscamos e levamos seu animalzinho na sua casa por uma pequena taxa (variável dependendo da localidade). 
          </RegularText>
        </Stat>
      </Stats>
    </IntroContainer>
  )
}