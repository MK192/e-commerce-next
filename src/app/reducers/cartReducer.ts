//enum
import { RActions } from "../enums/actions";

//functions
import {
  addSingleItem,
  addToCart,
  clearCart,
  deleteItem,
} from "../utils/functions";

export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case RActions.ADD_SINGLE_ITEM:
      const cartArray = addSingleItem(
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
      const items = addToCart(state, action.payload);
      localStorage.setItem("cart", JSON.stringify(items));
      return { ...state, cart: items };

    case RActions.DELETE_ITEM:
      const cartWithoutItem = JSON.parse(
        deleteItem(action.payload.id, action.payload.items)
      );
      return { ...state, cart: cartWithoutItem };

    case RActions.EMPTY_CART:
      clearCart();
      return { ...state, cart: [] };

    case RActions.GET_CART:
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      return { ...state, cart: cart };

    default:
      return state;
  }
};
