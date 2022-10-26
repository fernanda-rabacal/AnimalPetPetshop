import produce from "immer";
import { createContext, ReactNode, useEffect, useState } from "react"
import { Product } from "../pages/OurProducts/components/ProductCard"

interface CartContextProps {
  children: ReactNode
}

export interface CartItem extends Product {
  quantity: number;
}


interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  addItemToCart: (item: CartItem) => void;
  removeCartItem: (item: CartItem) => void;
  changeProductCartQuantity: (item: CartItem, type: "increase" | "decrease") => void
}

export const CartContext = createContext({} as CartContextType);

const CART_ITEMS_STORAGE_KEY = "AnimalPet:cartItems"

export function CartContextProvider({children} : CartContextProps){
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(CART_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  })
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

  function changeProductCartQuantity(item: CartItem, type: "increase" | "decrease") {
    const productExistsInCart = cartItems.findIndex(cartItem => cartItem.id === item.id)

    if(productExistsInCart >= 0) {
      const newCart = produce(cartItems, draft => {
        draft[productExistsInCart].quantity = type === "increase" ? item.quantity + 1 : item.quantity - 1
      })

      setCartItems(newCart)
    }
  }

  function removeCartItem(item: CartItem) {
    const productExistsInCart = cartItems.findIndex(cartItem => cartItem.id === item.id)

    if(productExistsInCart >= 0) {
      const newCart = produce(cartItems, draft => {
        draft.splice(productExistsInCart, 1)  
      })
      
      setCartItems(newCart)
    }
  }

  useEffect(() => {
    localStorage.setItem(CART_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return(
    <CartContext.Provider value={{
      cartItems,
      addItemToCart,
      cartQuantity,
      changeProductCartQuantity,
      removeCartItem
    }}>
      {children}
    </CartContext.Provider>
  )
}