import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "../../components/Button"
import { QuantityInput } from "../../components/QuantityInput"
import { TitleText } from "../../components/tipography"
import { CartContext } from "../../contexts/CartContext"
import { formatMoney } from "../../utils/formatMoney"
import { random } from "../../utils/random"
import { Error } from "../Error"
import { CarrouselContainer } from "../OurProducts/components/Carrousel"
import { AddToCart, Description, Infos, ProductDetailsContainer, ProductInformations } from "./styles"

export function ProductDetails() {
  const { products, addItemToCart } = useContext(CartContext)
  const {id} = useParams()
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(product => {
    return product.id === id
  })
  
  if(product === undefined) {
    return <Error />
  }
  
  const sameCategoryProducts =  random(products.filter(item => {
      return item.category == product.category
  }))
  
  const formattedPrice = formatMoney(product.price);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddItemToCart() {
    const itemToAdd = {
      ...product!,
      quantity
    }

    addItemToCart(itemToAdd)
  }

  return(
    <ProductDetailsContainer className="container">
      <ProductInformations>
        <img src={product.image} />

        <Infos>
          <TitleText>{product.name}</TitleText>
          <p>Código do produto: {product.id} | Em estoque</p>
          <TitleText size="l" color="green-primary" as="strong">
            R$ {formattedPrice}
          </TitleText>

          <Description>
            <TitleText as="h2">Descrição</TitleText >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </Description>
          

          <AddToCart>
            <QuantityInput 
              quantity={quantity}  
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              />

              <Button  
                btnValue="Adicionar ao carrinho"
                size="backToHome"
                onClick={() => handleAddItemToCart()}
                className="addItemToCartbtn"
              />
          </AddToCart>
        </Infos>
      </ProductInformations>

      <section>
        <TitleText size="l" as="strong">
          Quem viu, também viu esses
        </TitleText>
        <CarrouselContainer productArray={sameCategoryProducts}/>
      </section>
    </ProductDetailsContainer>
  )
}