import { MouseEvent, useRef } from "react";
import { Carrousel, CarrouselContainerStyled, ScrollButton } from "./styles";
import { Product, ProductCard } from "../../pages/OurProducts/components/ProductCard";
import { CaretLeft, CaretRight } from "phosphor-react";

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
      <ScrollButton onClick={(e) => handleLeftClick(e)}>
        <div>
          <CaretLeft size={20} weight="bold" />
        </div>
      </ScrollButton>
      <Carrousel ref={carrousel}>

        {productArray.map((product) => {
          return (
            <ProductCard 
              key={product.id}
              product={product} 
              />
          )})}

      </Carrousel>
      <ScrollButton onClick={(e) => handleRightClick(e)}>
        <div>
          <CaretRight size={20} weight="bold" />
        </div>
      </ScrollButton>
    </CarrouselContainerStyled>
  )
}