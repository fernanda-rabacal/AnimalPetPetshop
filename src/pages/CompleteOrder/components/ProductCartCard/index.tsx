import { Trash } from "phosphor-react";
import { useContext } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/tipography"
import { CartContext, CartItem } from "../../../../contexts/CartContext"
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionsContainer, ProductCartCardContainer, ProductName, RemoveButton } from "./styles";

interface ProductCartCardProps {
  product: CartItem
}

export function ProductCartCard({product} : ProductCartCardProps) {
  const { changeProductCartQuantity, removeCartItem } = useContext(CartContext)

  const productTotal = product.price * product.quantity;

  const formattedPrice = formatMoney(productTotal);

  function handleIncrease(){
    changeProductCartQuantity(product, "increase")
  }

  function handleDecrease(){
    changeProductCartQuantity(product, "decrease")
  }

  function handleRemove(){
    removeCartItem(product)
  }

  return(
    <ProductCartCardContainer>
      <div>
        <img src={product.image} />
        <div>
          <ProductName>
            {product.name}
          </ProductName>
          <ActionsContainer>
            <QuantityInput 
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={product.quantity}
            />

            <RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </ProductCartCardContainer>
  )
}