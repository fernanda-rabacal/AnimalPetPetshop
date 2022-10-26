import produce from "immer";
import { createContext, ReactNode, useState } from "react"
import { Product } from "../pages/OurProducts/components/ProductCard"

interface CartContextProps {
  children: ReactNode
}

export interface CartItem extends Product {
  quantity: number;
}


interface CartContextType {
  cartQuantity: number;
  addItemToCart: (item: CartItem) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({children} : CartContextProps){
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const cartQuantity = cartItems.length

  function addItemToCart(item: CartItem){
    const itemAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === item.id);

    const newCart = produce(cartItems, (draft) => {
      if(itemAlreadyExistsInCart < 0) {
        draft.push(item)
      } else {
        draft[itemAlreadyExistsInCart].quantity += item.quantity
      }
    })

    setCartItems(newCart)
  }

  return(
    <CartContext.Provider value={{
      addItemToCart,
      cartQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}