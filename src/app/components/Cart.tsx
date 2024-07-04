"use client";
import { useState } from "react";
import Image from "next/image";

//component
import CartModal from "./modals/CartModal";

//context
import { useCart } from "../context/CartContext";

//style
import { StyledCart } from "./StyledComponents/Cart.styled";

export default function Cart() {
  const { state } = useCart();
  const [showCartModal, setShowCartModal] = useState(false);

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
