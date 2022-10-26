import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { TitleText } from "../../../../components/tipography";
import { CartContext } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCartWrapper, CardFooter, Image, Info, Item } from "./styles";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface ProductProps {
  product: Product;
}

export function ProductCard({
  product
} : ProductProps){
  const [quantity, setQuantity] = useState(1);

  const { addItemToCart } = useContext(CartContext)

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddItemToCart() {
    const itemToAdd = {
      ...product,
      quantity
    }

    addItemToCart(itemToAdd)
  }


  const formattedPrice = formatMoney(product.price);

  return(
    <Item key={product.id}>
      <Image>
        <img src={product.image} alt={product.name} />
      </Image>

      <Info>
        <span className="name">{product.name}</span>
        <CardFooter>
          <div>
            
            <TitleText size="m" color="headline" as="strong">
              R$ {formattedPrice}
            </TitleText>
          </div>

          <AddCartWrapper>
            <QuantityInput 
              quantity={quantity}  
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              />
            <button onClick={() => handleAddItemToCart()}>
              <ShoppingCart weight="fill" size={20} color="#fff"/>
            </button>
          </AddCartWrapper>
        </CardFooter>
      </Info>
    </Item>        
  )
}