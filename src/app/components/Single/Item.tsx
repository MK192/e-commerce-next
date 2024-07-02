//components
import ItemImage from "./ItemImage";
import BuyingItem from "./BuyingItem";

//style
import { StyledItem } from "../StyledComponents/Item.styled";

//type
import { CartItemsType } from "@/app/types/cart";

type Props = {
  item: CartItemsType;
};
const Item = ({ item }: Props) => {
  return (
    <>
      <StyledItem>
        <ItemImage imgSrc={item.image} />
        <div className="selected-details">
          <span>{item.price}&nbsp;$</span>
          <BuyingItem item={item} />
          <p className="selected-category">{item.category}</p>
          <strong>{item.title}</strong>
          <p className="selected-description">{item?.description}</p>
        </div>
      </StyledItem>
    </>
  );
};

export default Item;
