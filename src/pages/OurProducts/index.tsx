import { ShoppingCart } from "phosphor-react";
import { useRef, MouseEvent  } from "react";
import Chevron from "../../assets/right_chevron.png"
import { FormerSubtitle, FormerTitle, TitleText } from "../../components/tipography";
import { Carrousel, OurProductsContainer, ScrollLeft, ScrollRight } from "./styles";
import { petFoods } from "../../data/products/petFoods"; 
import { ProductCard } from "./components/ProductCard";

export function OurProducts(){
  const carrousel = useRef<HTMLDivElement | null>(null);

  /* useEffect(() => {
    fetch("http://127.0.0.1:5173/products/petFoods.json", {
      mode: "no-cors",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods" : "GET, POST",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      }
    })
    .then(response => response.json())
    .then(setData)
  }, []) */

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
      
      <section>
          <ScrollLeft onClick={(e) => handleLeftClick(e)}>
            <img src={Chevron} alt="Scroll Left" />
          </ScrollLeft>
        <Carrousel ref={carrousel}>

          {petFoods.map((product) => {
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
      </section>
    </OurProductsContainer>
  )
}