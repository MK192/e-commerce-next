"use client";
import { ReactNode } from "react";

//context
import CartContext from "../context/CartContext";
import CategoryContext from "../context/CategoryContext";

type Props = {
  children: ReactNode;
};
export function Providers({ children }: Props) {
  return (
    <CartContext>
      <CategoryContext>{children}</CategoryContext>
    </CartContext>
  );
}
