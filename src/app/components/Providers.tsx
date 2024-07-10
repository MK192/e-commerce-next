"use client";
import { ReactNode } from "react";

//context
import CartContext from "../context/CartContext";
import CategoryContext from "../context/CategoryContext";
import ThemeContext from "../context/ThemeContext";

type Props = {
  children: ReactNode;
};
export function Providers({ children }: Props) {
  return (
    <ThemeContext>
      <CartContext>
        <CategoryContext>{children}</CategoryContext>
      </CartContext>
    </ThemeContext>
  );
}
