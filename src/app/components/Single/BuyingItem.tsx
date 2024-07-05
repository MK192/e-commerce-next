"use client";
import { useState } from "react";

//components
import Button from "../General/Button";

//context
import { useCart } from "@/app/context/CartContext";

//function
import { isLocalStorageAccessible } from "@/app/utils/functions";

//enum
import { RActions } from "@/app/enums/actions";

//type
import { CartItemsType } from "@/app/types/cart";

//style
import { theme } from "@/app/styles/variables";
type Props = {
  item: CartItemsType;
};

export default function BuyingItem({ item }: Props) {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const price = (numberOfItems * item?.price).toFixed(2);
  const { dispatch } = useCart();

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
      <Button
        backgroundColor={theme.greenBg}
        handleClick={() => {
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
        <p>Add to cart</p>
      </Button>
    </div>
  );
}
