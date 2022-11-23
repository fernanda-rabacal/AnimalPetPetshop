import { Button } from "../../components/Button";
import { ErrorPageContainer } from "./styles";

export function Error(){

  return(
      <ErrorPageContainer className="container">
        <h1>404</h1>
        <h4>Página não encontrada</h4>
        <p>OOPS! Parece que esta página não existe...  
        </p>
        <Button 
          size="backToHome" 
          btnValue="Voltar para a página inicial" 
          />
      </ErrorPageContainer>
  )

}