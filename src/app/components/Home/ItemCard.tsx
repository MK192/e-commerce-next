"use client";
import Link from "next/link";
import Image from "next/image";

//components
import Button from "../General/Button";

//context
import { useCart } from "../../context/CartContext";
import { useCategory } from "../../context/CategoryContext";

//enum
import { RActions } from "@/app/enums/actions";

//type
import { CartItemsType } from "../../types/cart";

//functions
import { isLocalStorageAccessible } from "../../utils/functions";

//style
import { StyledItemCard } from "../StyledComponents/ItemCard.styled";

type Props = {
  item: CartItemsType;
};

export default function ItemCard({ item }: Props) {
  const { setCategory } = useCategory();
  const { dispatch } = useCart();

  return (
    <>
      <StyledItemCard>
        <div className="add-button">
          <Button
            version="rounded"
            backgroundColor="orange"
            handleClick={() => {
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
            <p className="plus-paragraph"> +</p>
          </Button>
        </div>
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
