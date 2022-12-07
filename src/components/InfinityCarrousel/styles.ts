import styled from "styled-components";

export const ICarouselContainer = styled.div`
  .slick-next::before, .slick-prev::before {
    display: none;
  }

  .arrow-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    font-weight: 700;
    font-size: 2rem;
    z-index: 100;
    border-radius: 999px;
    transition: 0.2s;
    border: 1px solid ${({theme}) => theme.colors["base-hover"]};
    color: ${({theme}) => theme.colors["green-primary"]};
    background: ${({ theme }) => theme.colors.white};

    &:hover {
      box-shadow: 0 0 5px gray;
    }
  }
`

export const SlideItem = styled.div`
  max-width: 40rem;
  max-height: 38rem;
  padding: 0 0.5rem;
  border-radius: 10px;
  
  img {
    border-radius: 10px;
    width: 100%;
    object-fit: cover;
  }
`