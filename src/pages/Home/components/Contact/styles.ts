import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: left;

  header {
    margin-bottom: 3.2rem;
  }

  ul {
    margin-bottom: 3.2rem;
    
    li {
      display: flex;
      gap: 0.8rem;
      font-size: 2rem;
      margin-bottom: 3rem;
      color: ${({ theme }) => theme.colors.paragraph};
    }
  }

  iframe {
    border: 0;
    border-radius: 2rem;
    
    width: 100%;
    height: 32rem;
    margin-inline: auto;
  }

  @media(min-width: 1024px) {
    flex-direction: row;

    iframe {
      width: 55rem;
      height: 45rem;
    }
  }
`