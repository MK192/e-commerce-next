//components
import ItemsContainer from "./ItemsContainer";

//request
import getItems from "@/app/requests/Items";

export default async function Items() {
  const itemsData = getItems();
  const items = await itemsData;

  return <ItemsContainer items={items} />;
}
