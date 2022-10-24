import { ShoppingCart } from "phosphor-react";
import { useEffect, useState, useRef, MouseEvent  } from "react";
import Chevron from "../../assets/right_chevron.png"
import { QuantityInput } from "../../components/QuantityInput";
import { FormerSubtitle, FormerTitle, RegularText, TitleText } from "../../components/tipography";
import { formatMoney } from "../../utils/formatMoney";
import { AddCartWrapper, CardFooter, Carrousel, Image, Info, Item, OurProductsContainer, ScrollLeft, ScrollRight } from "./styles";

export function OurProducts(){
  const [ data, setData ] = useState([]);
  const carrousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5173/products/petFoods.json", {
      mode: "no-cors",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(response => response.json())
    .then(setData)
  }, [])

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

  if(!data || !data.length) return null

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

          {data.map((item) => {
            const {id, name, price, image } = item;
            const formattedPrice = formatMoney(price);

            return (
              <Item key={id}>
                <Image>
                  <img src={image} alt={name} />
                </Image>

                <Info>
                  <span className="name">{name}</span>
                  <CardFooter>
                    <div>
                      
                      <TitleText size="m" color="headline" as="strong">
                        R$ {formattedPrice}
                      </TitleText>
                    </div>

                    <AddCartWrapper>
                      <QuantityInput />
                      <button>
                        <ShoppingCart weight="fill" size={20} color="#fff"/>
                      </button>
                    </AddCartWrapper>
                  </CardFooter>
                </Info>
              </Item>
            )})}

        </Carrousel>
          <ScrollRight onClick={(e) => handleRightClick(e)}>
            <img src={Chevron} alt="Scroll Right" />
          </ScrollRight>
      </section>
    </OurProductsContainer>
  )
}