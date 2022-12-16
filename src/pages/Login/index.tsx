import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormerTitle, RegularText } from "../../components/tipography";
import { LoginContainer, FormContainer, LoginForm, InfosContainer } from "./styles";
import LoginPic from "../../assets/login-ilustration.svg"
import { useEffect } from "react";
import { useTheme } from "styled-components";

export function LoginPage() {
 
  return(
    <div className="container">
      <FormerTitle size="l">Acesse sua conta</FormerTitle>
      
        <LoginContainer>
          <FormContainer>
            <LoginForm>
              <label htmlFor="email">
                <div>
                  <p>E-mail</p>
                </div>
                <Input id="email" placeholder="Digite seu e-mail"/>
              </label>
              <label htmlFor="password">
                <div>
                  <p>Senha</p>
                  <NavLink to="/forgot-password">Esqueci a senha</NavLink>
                </div>
                <Input id="password" type="password" placeholder="Digite sua senha"/>
              </label>
              <Button btnValue="Entrar" size="order" type="submit"  />
            </LoginForm>

            <div>
              <p>Não tem uma conta? <NavLink to="/register">Crie sua conta</NavLink></p>
            </div>
          </FormContainer>
          
          <InfosContainer>
            <FormerTitle color="green-primary" size="l">
              É rápido e gratuito!
            </FormerTitle>
            <RegularText>
              Fazendo o login na sua conta da Animal Pet você tem acesso a ofertas exclusivas, descontos, pode acompanhar os seus pedidos e muito mais! Nunca foi tão facil garantir o melhor para o seu animalzinho!
            </RegularText>
            <img src={LoginPic} />
          </InfosContainer>
      </LoginContainer>
    </div>
  )
}