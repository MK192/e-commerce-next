//enum
import { RActions } from "../enums/actions";

//type
import { CartItemsType } from "../types/cart";
import { CartStateType } from "../types/state";

//functions
import {
  addSingleItem,
  addToCart,
  clearCart,
  deleteItem,
} from "../utils/functions";

export const cartReducer = (state: CartStateType, action: any) => {
  let cartArray: CartItemsType[] | [] = [];

  switch (action.type) {
    case RActions.ADD_SINGLE_ITEM:
      cartArray = addSingleItem(
        state,
        action.payload.numberOfItems,
        action.payload.item
      );

      localStorage.setItem("cart", JSON.stringify(cartArray));
      return {
        ...state,
        cart: cartArray,
      };

    case RActions.ADD_ITEM_TO_CART:
      cartArray = addToCart(state, action.payload);
      localStorage.setItem("cart", JSON.stringify(cartArray));
      return { ...state, cart: cartArray };

    case RActions.DELETE_ITEM:
      cartArray = deleteItem(state, action.payload.id);
      localStorage.setItem("cart", JSON.stringify(cartArray));
      return { ...state, cart: cartArray };

    case RActions.EMPTY_CART:
      clearCart();
      return { ...state, cart: [] };

    case RActions.SET_ANIMATION_ACTIVE:
      return {
        ...state,
        isAnimationActive: true,
      };
    case RActions.SET_ANIMATION_INACTIVE:
      return {
        ...state,
        isAnimationActive: false,
      };
    case RActions.GET_CART:
      cartArray = JSON.parse(localStorage.getItem("cart") || "[]");
      return { ...state, cart: cartArray };

    default:
      return state;
  }
};
