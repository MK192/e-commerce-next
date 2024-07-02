//types
import { CartItemsType } from "../types/cart";

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
export const addToCart = (state: any, item: CartItemsType) => {
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
export const handleChange = (
  id: number,
  value: number,
  prev: number,
  cartItems: CartItemsType[],
  setNewValue: (quantity: number | null) => void,
  setTotal: (quantity: number) => void,
  setCartItems: (cartItems: CartItemsType[]) => void
) => {
  cartItems.map((item) => {
    if (item.id === id) {
      item.quantity = Number(value);
      setNewValue(item.quantity);
      setTotal(prev + value);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  });
  setCartItems(cartItems);
};
/* this function delete selected item from cart and change 'cart' localstorage object */
export const deleteItem = (id: number, cartItems: CartItemsType[]) => {
  const newArray = cartItems.filter((item) => item.id !== id);

  return JSON.stringify(newArray);
};

/* this function add single or multiple items of same type to cart, function is used in 
single item page */

export const addSingleItem = (
  state: any,
  numberOfItems: number,
  selected: CartItemsType
) => {
  let cartArray = [...state.cart];
  // let selectedItem = cartArray?.find(
  //   (item: CartItemsType) => item.id === selected.id
  // );

  // if (selectedItem) {
  //   const itemId = cartArray.findIndex((item) => item.id === selected.id);
  //   const modItem = {
  //     ...selectedItem,
  //     quantity: selectedItem.quantity + numberOfItems,
  //   };
  //   cartArray.splice(itemId, 1, modItem);
  // } else {
  //   selected = { ...selected, quantity: numberOfItems };
  //   cartArray.push(...cartArray, selected);
  // }

  return cartArray;
};
/* this function activate animation for new item on cart icon */

export const handleActive = (setActive: (active: boolean) => void) => {
  setActive(true);
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
