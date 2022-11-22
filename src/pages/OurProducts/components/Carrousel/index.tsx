import { MouseEvent, useRef } from "react";
import { Carrousel, CarrouselContainerStyled, ScrollLeft, ScrollRight } from "./styles";
import { Product, ProductCard } from "../ProductCard";
import Chevron from "../../../../assets/right_chevron.png"

interface CarrouselProps {
  productArray: Product[]
}

export function CarrouselContainer({productArray} : CarrouselProps) {
  const carrousel = useRef<HTMLDivElement | null>(null);

  const handleLeftClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(carrousel.current) {
      carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    }
  }
  
  const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if(carrousel.current) {
      carrousel.current.scrollLeft += carrousel.current.offsetWidth;
    }
  }

  return(
    <CarrouselContainerStyled>
      <ScrollLeft onClick={(e) => handleLeftClick(e)}>
        <img src={Chevron} alt="Scroll Left" />
      </ScrollLeft>
      <Carrousel ref={carrousel}>

        {productArray.map((product) => {
          return (
            <ProductCard 
              key={product.id}
              product={product} 
              />
          )})}

      </Carrousel>
      <ScrollRight onClick={(e) => handleRightClick(e)}>
        <img src={Chevron} alt="Scroll Right" />
      </ScrollRight>
    </CarrouselContainerStyled>
  )
}