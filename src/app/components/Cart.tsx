"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

//component
import CartModal from "./Modals/CartModal";

//context
import { useCart } from "../context/CartContext";

//function
import { handleActive } from "../utils/functions";

//style
import { StyledCart } from "./StyledComponents/Cart.styled";

export default function Cart() {
  const { state } = useCart();
  const [showCartModal, setShowCartModal] = useState(false);
  const [activateAnimation, setActivateAnimation] = useState(false);
  const prevCartLengthRef = useRef(state.cart.length);

  useEffect(() => {
    if (
      state.cart.length > prevCartLengthRef.current &&
      prevCartLengthRef.current > 0
    ) {
      handleActive(setActivateAnimation, activateAnimation);
    }

    prevCartLengthRef.current = state.cart.length;
  }, [activateAnimation, state.cart.length]);

  return (
    <StyledCart id="cart-id">
      <div className="image" onClick={() => setShowCartModal(true)}>
        <Image
          src="/cart.png"
          height={40}
          width={45}
          priority
          alt="shopping cart"
          className={
            state?.cart?.length === 0
              ? "empty-cart-image-nav"
              : "cart-image-nav"
          }
        />
        <div className="cart-item-hidden-nav">Hid</div>
        {activateAnimation && (
          <div className="cart-item-nav">ITEM(S) ADDED</div>
        )}
        <div className="number-of-items-nav">{state?.cart?.length ?? "0"}</div>
      </div>

      {showCartModal ? (
        <CartModal
          setShowModalCart={setShowCartModal}
          domNode={document.getElementById("cart-id")}
        />
      ) : null}
    </StyledCart>
  );
}
