import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { TitleText } from "../../../../components/tipography";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCartWrapper, CardFooter, Image, Info, Item } from "./styles";

export interface Product {
  id: string;
  name: string;
  quantity: number;
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

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
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
            <button>
              <ShoppingCart weight="fill" size={20} color="#fff"/>
            </button>
          </AddCartWrapper>
        </CardFooter>
      </Info>
    </Item>        
  )
}