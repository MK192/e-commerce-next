//components
import Item from "@/app/components/Single/Item";

//request
import getSingleItem from "@/app/requests/singleItem";

//type
import { CartItemsType } from "@/app/types/cart";

type Params = {
  params: {
    itemId: string;
  };
};

export default async function SingleItem({ params: { itemId } }: Params) {
  const itemData = getSingleItem(itemId);
  const item: CartItemsType = await itemData;

  return (
    <div>
      <Item item={item} />
    </div>
  );
}
