import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%; 
  }

  .container {  
    width: min(50rem, 100%);
    padding-inline: 2.4rem;
    box-sizing: border-box;
    margin-inline: auto;

    @media(min-width: 1024px){
      .container {
        width: min(112rem, 100%);
    }
  }

  * {
    font-size: 1.6rem;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
  }

  a{
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }
`