"use client";

//components
import ItemImage from "./ItemImage";
import BuyingItem from "./BuyingItem";

//context
import { useTheme } from "@/app/context/ThemeContext";

//style
import { StyledItem } from "../StyledComponents/Item.styled";

//type
import { CartItemsType } from "@/app/types/cart";

type Props = {
  item: CartItemsType;
};
const Item = ({ item }: Props) => {
  const { theme } = useTheme();

  return (
    <>
      <StyledItem theme={theme}>
        <div className="item-container">
          <ItemImage imgSrc={item.image} />
          <div className="selected-price">
            <span>{item.price}&nbsp;$</span>
            <BuyingItem item={item} />
            <p className="selected-category">{item.category}</p>
            <strong>{item.title}</strong>
            <p className="selected-description">{item?.description}</p>
          </div>
        </div>
      </StyledItem>
    </>
  );
};

export default Item;
