"use client";
import { useState } from "react";
import Image from "next/image";

//components
import Modal from "./Modal";
import CartModalLineItem from "../CartModalLineItem";

//context
import { useCart } from "@/app/context/CartContext";

//type
import { CartItemsType } from "@/app/types/cart";

//functions
import { isLocalStorageAccessible } from "@/app/utils/functions";

//style
import { StyledCartModal } from "../StyledComponents/CartModal.styled";

type Props = {
  setShowModalCart: (showModal: boolean) => void;
  domNode: HTMLElement | Element | DocumentFragment | null;
};
const CartModal = ({ setShowModalCart, domNode }: Props) => {
  const [total, setTotal] = useState<number>(0);
  const { state, dispatch } = useCart();
  /* cartArray is made to be copy of state.cart, to prevent changes in other
  components that use state.cart when something change in cart modal */
  const [cartArray, setCartArray] = useState([...state.cart]);
  return (
    <Modal title={"Cart"} setShowModal={setShowModalCart} domNode={domNode}>
      <StyledCartModal>
        {state.cart.length === 0 ? (
          <div className="empty-cart">
            <Image
              src="/cart.png"
              alt="empty-cart-image"
              height={200}
              width={100}
              unoptimized={true}
              priority
            />
            <p>Cart empty</p>
          </div>
        ) : (
          <div className="cart">
            {state.cart.map((item: CartItemsType) => (
              <CartModalLineItem
                item={item}
                key={item.id}
                setCartArray={setCartArray}
                setTotal={setTotal}
              />
            ))}

            <div className="total">{total} $</div>
            <div className="buttons-div">
              <button
                onClick={() => {
                  if (isLocalStorageAccessible()) {
                    dispatch({ type: "empty_cart" });
                    setCartArray([]);
                  } else {
                    alert("localstorage is unavailable");
                  }
                }}
                className="clear-button"
              >
                Clear
              </button>
              <button
                onClick={() => {
                  if (isLocalStorageAccessible()) {
                    dispatch({ type: "empty_cart" });
                    setCartArray([]);
                  } else {
                    alert("localstorage is unavailable");
                  }
                }}
                className="buy-button"
              >
                Buy
              </button>
            </div>
          </div>
        )}
      </StyledCartModal>
    </Modal>
  );
};

export default CartModal;
