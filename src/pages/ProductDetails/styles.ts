import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  color: ${({ theme }) => theme.colors.paragraph}
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProductInformations = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10rem;

  img {
    width: 100%;
    max-width: 40rem;
    border-radius: 20px;
    box-shadow: 0 0 5px gray;
  }

  @media(min-width: 700px) {
    flex-direction: row;
    margin-left: 3rem;

    h1 {
      font-size: 2rem;
    }
  }
`

export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .addItemToCartbtn {
    font-size: 1rem;
    padding: 0 2rem;
    height: 3rem;
    margin: 0;
}


  @media(min-width: 700px) {
    margin-top: 3rem;
    justify-content: flex-start;


    .addItemToCartbtn {
      font-size: 1.4rem;
    }
  }
`


export const Description = styled.div`
  margin-top: 1.5rem;
  max-width: 50rem;
`