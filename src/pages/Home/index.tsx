import Whatsapp from '../../assets/whatsapp.svg';

import DogCat from '../../assets/dog-cat-puppy-kitten.png';
import { Button } from "../../components/Button";
import { Stats } from './styles';

export function Home(){


  return(
    <div className='home-container'>
      <div className='home-wrapper'>
        <div className="col-a">
          <h1 className="home-title">ANIMAL PET</h1>
            <h4 className="home-h4">Cuidado completo com o seu animalzinho</h4>
            <p className="home-content">
              A Animal Pet possui uma estrutura completa para cuidar do seu pet, desde consultório veterinário, área de banho e tosa, além de acessórios e rações da maior qualidade! Estamos abertos de segunda a sabado, das 8hrs às 18hrs
            </p>
              <a target="_blank" rel="noreferrer" href="https://wa.me/5571993172074" >
                <Button btnValue={
                <div className='home-button'>
                  <img src={Whatsapp} alt='whatsapp logo'/>
               <p>Agende agora Sua tosa</p>
                </div>}  />
              </a>
          </div>
            <img className="home-img" src={DogCat} alt="two cats and two dogs side by side" />
            <Stats>
              <div className="stat">
              <h3 className="stat-title">Consultório</h3>
                <p className="stat-content">Possuimos veterinários disponíveis de segunda à sabado, das 09hrs até as 17hrs, com os equipamentos e a estrutura completa para melhor te atender.</p>
              </div>
              <div className="stat">
              <h3 className="stat-title" >Banho e Tosa</h3>
                <p className="stat-content">Temos várias opções de banho e tosa para cães e gatos, como tosa higiênica, tosa completa, tosa bebê, além de corte de unha e limpeza de ouvidos.</p>
              </div>
              <div className="stat">
              <h3 className="stat-title">Taxi Pet</h3>
                <p className="stat-content">Buscamos e levamos seu animalzinho na sua casa por uma pequena taxa (variável dependendo da localidade). </p>
              </div>
            </Stats>
      </div>
    </div>
  )

}