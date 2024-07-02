"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useEffect,
} from "react";

//type
import { CartItemsType } from "../types/cart";

//reducer
import { cartReducer } from "../reducers/cartReducer";

//enum
import { RActions } from "../enums/actions";

interface CartContextDefaultValue {
  cart: string | CartItemsType[];
  dispatch: (action: any) => void;
}

const CartDataContext = createContext<CartContextDefaultValue>({
  cart: "[]",
  dispatch: () => {},
});
type Props = {
  children: ReactNode;
};

const CartContext = ({ children }: Props) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  useEffect(() => {
    dispatch({ type: RActions.GET_CART });
  }, []);
  return (
    <CartDataContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartDataContext.Provider>
  );
};
export default CartContext;

export function useCart() {
  return useContext(CartDataContext);
}
