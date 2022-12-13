import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12rem;
  margin-top: 1rem;

  @media(min-width: 700px) {
    flex-direction: row;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  height: 34rem;
  padding: 2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors["base-card"]};
  border: 1px solid  ${({ theme }) => theme.colors["base-hover"]};

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
    text-align: center;
    border-top: 1px solid ${({theme}) => theme.colors["base-hover"]};
    margin-top: 2rem;
    padding-top: 1.5rem;

    p a {
      color: ${({theme}) => theme.colors["base-blue-light"]};
    }
  }
`

export const LoginForm = styled.form`
> label {
  color: ${({theme}) => theme.colors.headline};
  font-weight: 700;
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 5px;

    a {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors["base-blue-light"]};
      border-bottom: 1px solid ${({theme}) => theme.colors["base-blue-light"]};
    }
    
    p {
      font-size: 1.4rem;
      margin-top: 1.5rem;
    }
   }
   
   input {
      width: 30rem;
    }
  }

  button {
    width: 30rem;
  }
`

export const InfosContainer = styled.div`
  width: 100%;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-weight: 700;
  }


  img {
    width: 22rem;
    margin-inline: auto;
  }
`