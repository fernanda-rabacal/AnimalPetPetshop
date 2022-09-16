import DogCat from '../../../../assets/dog-cat-puppy-kitten.png';
import { Benefits, ButtonContainer, IntroContainer, Paragraph, Stat, Stats } from './styles';
import { Button } from '../../../../components/Button';
import { WhatsappLogo } from 'phosphor-react';


export function Intro() {
  return(
    <IntroContainer className="container">
      <Benefits>
        <h1>ANIMAL PET</h1>
        <h4>Cuidado completo com o seu animalzinho</h4>
        <Paragraph>
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
          <h3>Consultório</h3>
          <p>Possuimos veterinários disponíveis de segunda à sabado, das 09hrs até as 17hrs, com os equipamentos e a estrutura completa para melhor te atender.</p>
        </Stat>

        <Stat>
          <h3>Banho e Tosa</h3>
          <p>Temos várias opções de banho e tosa para cães e gatos, como tosa higiênica, tosa completa, tosa bebê, além de corte de unha e limpeza de ouvidos.</p>
        </Stat>

        <Stat>
          <h3>Taxi Pet</h3>
          <p>Buscamos e levamos seu animalzinho na sua casa por uma pequena taxa (variável dependendo da localidade). </p>
        </Stat>
      </Stats>
    </IntroContainer>
  )
}