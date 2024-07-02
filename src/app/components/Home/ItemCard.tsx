"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//context
import { useCart } from "../../context/CartContext";
import { useCategory } from "../../context/CategoryContext";

//enum
import { RActions } from "@/app/enums/actions";

//type
import { CartItemsType } from "../../types/cart";

//functions
import { addToCart, isLocalStorageAccessible } from "../../utils/functions";

//style
import { StyledItemCard } from "../StyledComponents/ItemCard.styled";

type Props = {
  item: CartItemsType;
};

export default function ItemCard({ item }: Props) {
  const [animationReady, setAnimationReady] = useState(true);
  const { setCategory } = useCategory();
  const { cart, dispatch } = useCart();

  return (
    <>
      <StyledItemCard>
        <button
          type="button"
          onClick={() => {
            if (isLocalStorageAccessible()) {
              dispatch({
                type: RActions.ADD_ITEM_TO_CART,
                payload: item,
              });
            } else {
              alert("localstorage is unavailable");
            }
          }}
        >
          +
        </button>
        <Link href={`pages/singlePage/${item.id}`}>
          <Image
            src={item.image}
            alt="article-image"
            height={100}
            width={100}
            unoptimized={true}
            priority
          />
        </Link>
        <p className="price">{item?.price} $</p>
        <Link href={`pages/singlePage/${item.id}`}>
          <p className="title">{item?.title}</p>
        </Link>
        <p className="description">{item?.description}</p>
        <p
          className="category"
          onClick={() => {
            setCategory(item.category);
          }}
        >
          {item?.category}
        </p>
      </StyledItemCard>
    </>
  );
}
