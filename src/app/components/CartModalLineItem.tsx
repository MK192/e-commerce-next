"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// type
import { CartItemsType } from "../types/cart";

//functions
import { handleChange, isLocalStorageAccessible } from "../utils/functions";

//context
import { useCart } from "../context/CartContext";

type Props = {
  item: CartItemsType;
  setCartArray: (array: CartItemsType[]) => void;
  setTotal: (total: number) => void;
};
export default function CartModalLineItem({
  item,
  setCartArray,
  setTotal,
}: Props) {
  const { state, dispatch } = useCart();
  const [numberOfItems, setNumberOfItems] = useState<number>(
    item.quantity ?? 0
  );

  useEffect(() => {
    if (numberOfItems > 0) {
      const changedArray = handleChange(item.id, numberOfItems);
      localStorage.setItem("cart", JSON.stringify(changedArray));

      const totalPay = changedArray.reduce(
        (total: number, cart: CartItemsType) => {
          total += cart.price * cart.quantity;
          return total;
        },
        0
      );
      setTotal(totalPay.toFixed(2));
      item.quantity = numberOfItems;
    } else {
      setNumberOfItems(1);
    }
  }, [state, item, numberOfItems, setTotal]);

  const itemPrice = item.quantity
    ? (item.quantity * item.price).toFixed(2)
    : item.price;

  return (
    <div className="cart-item" key={item.id}>
      <button
        onClick={() => {
          if (isLocalStorageAccessible()) {
            dispatch({
              type: "delete_item",
              payload: { id: item.id },
            });
            setCartArray(state.cart);
          } else {
            alert("locaststorage is unavailable");
          }
        }}
      >
        x
      </button>
      <Image
        src={item.image}
        alt="item from cart image"
        height={100}
        width={100}
        priority
      />{" "}
      <div className="middle-div">
        <p>{item.title}</p>
        <p>Price : {item.price} $</p>
      </div>
      <div className="right-div">
        <input
          type="number"
          min="1"
          value={numberOfItems}
          onChange={(e) => {
            setNumberOfItems(Number(e.target.value));
          }}
        />
        <strong>{itemPrice} $</strong>
      </div>
    </div>
  );
}
