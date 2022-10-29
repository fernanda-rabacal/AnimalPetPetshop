import { useRef, MouseEvent, RefObject  } from "react";
import Chevron from "../../assets/right_chevron.png"
import { FormerSubtitle, FormerTitle } from "../../components/tipography";
import {  OurProductsContainer } from "./styles";
import { petFoods } from "../../data/products/petFoods"; 
import { ProductCard } from "./components/ProductCard";
import { medicines } from "../../data/products/medicines";
import { CarrouselContainer } from "./components/Carrousel";

export function OurProducts(){
  const carrousel1 = useRef<HTMLDivElement | null>(null);
  const carrousel2 = useRef<HTMLDivElement | null>(null);

  const handleLeftClick = (e: MouseEvent<HTMLButtonElement>, carrousel: RefObject<HTMLDivElement | null>) => {
    e.preventDefault();

    if(carrousel.current) {
      carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    }
  }
  
  const handleRightClick = (e: MouseEvent<HTMLButtonElement>, carrousel: RefObject<HTMLDivElement | null>) => {
    e.preventDefault()

    if(carrousel.current) {
      carrousel.current.scrollLeft += carrousel.current.offsetWidth;
    }
  }

  return(
    <OurProductsContainer className="container">
      <FormerTitle color="green-primary">
        NOSSOS PRODUTOS
      </FormerTitle>

      <FormerSubtitle size="l" as="h2">
        Seleção dos melhores produtos
      </FormerSubtitle>


      <FormerTitle as="h2">
        Rações e petiscos
      </FormerTitle>
      <CarrouselContainer productArray={petFoods}/>

      <FormerTitle as="h2">
        Medicamentos
      </FormerTitle>
      <CarrouselContainer productArray={medicines}/>
    </OurProductsContainer>
  )
}