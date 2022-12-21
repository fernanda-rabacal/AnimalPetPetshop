import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormerTitle, RegularText } from "../../components/tipography";
import { LoginContainer, FormContainer, LoginForm, InfosContainer } from "./styles";
import { useState } from "react";
import LoginPic from "../../assets/login-ilustration.svg"
import { Eye, EyeSlash } from "phosphor-react";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface ILogin {
  email: string;
  password: string;
}

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm()
  const { colors } = useTheme()

  const toastError = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
    };

  function login(data) {
    if (!data.email || !data.password) {
			toast.error('Email e senha são obrigatórios.', toastError);
			return;
		}
  }

  const handleClickShowPassword = () => {
		setShowPassword((prevValue) => !prevValue);
	};

  return(
    <LoginContainer className="container">
      <ToastContainer />
        <div>
          <FormerTitle size="l">Acesse sua conta</FormerTitle> 
          <FormContainer>
            <LoginForm onSubmit={handleSubmit(login)}>
              <div>
                <label htmlFor="email">E-mail</label>
                <Input 
                  id="email" 
                  placeholder="Digite seu e-mail" 
                  {...register('email')}
                  />
              </div>
              <div>
                <label htmlFor="password">
                  Senha
                  <NavLink to="/forgot-password">Esqueci a senha</NavLink>
                </label>
                <Input 
                  id="password" 
                  placeholder="Digite sua senha"
                  type={showPassword ? "text" : "password"} 
                  {...register('password')}
                  />
                {
                  showPassword ? 
                  <EyeSlash size={22} onClick={handleClickShowPassword} color={colors["base-label"]}/> :
                  <Eye size={22} onClick={handleClickShowPassword} color={colors["base-label"]}/>
                }

              </div>
              <Button btnValue="Entrar" size="order" type="submit" />
            </LoginForm>

            <div>
              <p>Não tem uma conta? <NavLink to="/register">Crie sua conta</NavLink></p>
            </div>
          </FormContainer>
        </div>
          
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
  )
}