import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12rem;
  margin-top: 5rem;

  @media(min-width: 700px) {
    flex-direction: row;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-top: 1.5rem;
  padding: 2rem 3rem;
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
  > div {
    position: relative;
    margin-top: 1.5rem;

    label {
      color: ${({theme}) => theme.colors.headline};
      font-weight: 700;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    a {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors["base-blue-light"]};
      border-bottom: 1px solid ${({theme}) => theme.colors["base-blue-light"]};
    }
    
     svg {
      position: absolute;
      top: 50%;
      right: 4%;
      cursor: pointer;
     }
   }
   
  button, input {
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
    width: 24rem;
    margin-inline: auto;
  }
`