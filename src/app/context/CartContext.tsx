"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useEffect,
} from "react";

//type

import { CartStateType } from "../types/state";

//reducer
import { cartReducer } from "../reducers/cartReducer";

//enum
import { RActions } from "../enums/actions";

interface CartContextDefaultValue {
  state: CartStateType;
  dispatch: (action: any) => void;
}

const CartDataContext = createContext<CartContextDefaultValue>({
  state: { cart: [], isAnimationActive: false },
  dispatch: () => {},
});
type Props = {
  children: ReactNode;
};

const CartContext = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    isAnimationActive: false,
  });
  useEffect(() => {
    dispatch({ type: RActions.GET_CART });
  }, []);

  return (
    <CartDataContext.Provider value={{ state, dispatch }}>
      {children}
    </CartDataContext.Provider>
  );
};
export default CartContext;

export function useCart() {
  return useContext(CartDataContext);
}
