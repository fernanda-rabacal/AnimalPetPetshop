import { FormerTitle, RegularText } from "../../components/tipography";
import { CardFooter, ServiceCard, ServicesCards, ServicesContainer } from "./styles";
import DogShower from '../../assets/cachorro-tomando-banho.png';
import { ArrowRight } from "phosphor-react";
import { servicesData } from "../../data/servicesData";

export function ServicesPage() {
  return(
    <ServicesContainer className="container">
      <FormerTitle size="l">
        SERVIÇOS
      </FormerTitle>

      <ServicesCards>
        {servicesData.map(service => {
          return(
            <ServiceCard>
              <img src={service.image} />
            
              <div>
                <FormerTitle size="l" color="green-primary">{service.name}</FormerTitle>
                <RegularText size="l">
                  {service.description}
                </RegularText>
              </div>
                
              <CardFooter to="/home">
                Saiba mais
                <ArrowRight size={24} />
              </CardFooter>
            </ServiceCard>
          )
        })}
      </ServicesCards>
    </ServicesContainer>
  )
}