import { FormerTitle } from "../../components/tipography";
import { ServiceCard, ServicesCards, ServicesContainer } from "./styles";
import DogShower from '../../assets/cachorro-tomando-banho.png'

export function ServicesPage() {
  return(
    <ServicesContainer className="container">
      <FormerTitle size="l">
        SERVIÇOS
      </FormerTitle>

      <ServicesCards>
        <ServiceCard>
          <img src={DogShower} />

          <div>
            <p>Cachorro tomando banho</p>
            <p>Cachorro tomando banho</p>
            <p>Cachorro tomando banho</p>
          </div>
        </ServiceCard>
        <ServiceCard>
          <img src={DogShower} />

          <div>
            <p>Cachorro tomando banho</p>
            <p>Cachorro tomando banho</p>
            <p>Cachorro tomando banho</p>
          </div>
        </ServiceCard>
        <ServiceCard>
          <img src={DogShower} />

          <div>
            <p>Cachorro tomando banho</p>
            <p>Cachorro tomando banho</p>
            <p>Cachorro tomando banho</p>
          </div>
        </ServiceCard>
        <ServiceCard>
          <img src={DogShower} />

          <div>
            <p>Cachorro tomando banho</p>
            <p>Cachorro tomando banho</p>
            <p>Cachorro tomando banho</p>
          </div>
        </ServiceCard>
      </ServicesCards>
    </ServicesContainer>
  )
}