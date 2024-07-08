//types
import { CartItemsType } from "../types/cart";
import { CartStateType } from "../types/state";

/* this functions checks is localstorage available to read or write */
export function isLocalStorageAccessible() {
  if (typeof localStorage === "object") {
    try {
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  return false;
}

/* this function add item to cart or 
increase quantity of items if item is already added to cart*/
export const addToCart = (state: CartStateType, item: CartItemsType) => {
  const cartArray = [...state.cart];
  const indexOfElement = cartArray.findIndex(
    (obj: CartItemsType) => obj?.id === item?.id
  );
  if (indexOfElement !== -1) {
    state.cart[indexOfElement] = {
      ...state.cart[indexOfElement],
      quantity: state.cart[indexOfElement].quantity + 1,
    };
  } else {
    item = { ...item, quantity: item.quantity ? (item.quantity += 1) : 1 };
    cartArray.push(item);
  }

  return cartArray;
};

/* this function change value of input field, also create new
cart object with updates about quantity */
export const handleChange = (id: number, numberOfItems: number) => {
  const cartArray = JSON.parse(localStorage.getItem("cart") || "[]");
  const indexOfElement = cartArray.findIndex(
    (obj: CartItemsType) => obj?.id === id
  );
  cartArray[indexOfElement] = {
    ...cartArray[indexOfElement],
    quantity: numberOfItems,
  };
  return cartArray;
};
/* this function delete selected item from cart and change 'cart' localstorage object */
export const deleteItem = (state: CartStateType, id: number) => {
  let cartArray = [...state.cart];
  cartArray = cartArray.filter((item) => item.id !== id);
  return cartArray;
};

/* this function add single or multiple items of same type to cart, function is used in 
single item page */

export const addSingleItem = (
  state: CartStateType,
  numberOfItems: number,
  item: CartItemsType
) => {
  let cartArray = [...state.cart];
  const indexOfElement = cartArray.findIndex(
    (obj: CartItemsType) => obj?.id === item?.id
  );

  if (indexOfElement !== -1) {
    state.cart[indexOfElement] = {
      ...state.cart[indexOfElement],
      quantity: state.cart[indexOfElement].quantity + numberOfItems,
    };
  } else {
    item = {
      ...item,
      quantity: item.quantity
        ? (item.quantity += numberOfItems)
        : numberOfItems,
    };
    cartArray.push(item);
  }

  return cartArray;
};

/* this function activate animation for new item on cart icon */

export const handleActive = (
  setActive: (active: boolean) => void,
  activate: boolean
) => {
  if (!activate) setActive(true);
  setTimeout(() => {
    setActive(false);
  }, 2000);
};

/* function for deleting all items from cart state and from 'cart localstorage*/
export const clearCart = () => {
  localStorage.clear();
};

/* filter items on search or category change */
export const filterItems = (
  search: string,
  category: string,
  items: CartItemsType[]
) => {
  let newArray = items;

  if (search) {
    newArray = items.filter((item) =>
      item.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }
  if (category) {
    newArray = newArray.filter((item) => item.category === category);
  }
  return newArray;
};
