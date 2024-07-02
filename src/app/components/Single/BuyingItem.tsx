"use client";
import { useState, useRef, useEffect } from "react";

//context
import { useCart } from "@/app/context/CartContext";

//function
import { isLocalStorageAccessible, addSingleItem } from "@/app/utils/functions";

//enum
import { RActions } from "@/app/enums/actions";

//type
import { CartItemsType } from "@/app/types/cart";

type Props = {
  item: CartItemsType;
};

export default function BuyingItem({ item }: Props) {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const price = (numberOfItems * item?.price).toFixed(2);
  const { cart, dispatch } = useCart();

  return (
    <div>
      <div className="number-of-items">
        <input
          type="number"
          value={numberOfItems}
          min={1}
          onChange={(e) => {
            if (Number(e.target.value) > 0) {
              setNumberOfItems(Number(e.target.value));
            }
          }}
        />
        {price}$
      </div>

      <button
        type="button"
        onClick={() => {
          if (isLocalStorageAccessible()) {
            dispatch({
              type: RActions.ADD_SINGLE_ITEM,
              payload: { numberOfItems, item },
            });
          } else {
            alert("localstorage unavailable");
          }
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
