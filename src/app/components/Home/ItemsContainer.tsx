"use client";
import { useState } from "react";

//components
import ItemCard from "./ItemCard";
import Filter from "../Filter";
import ThemeToggle from "../General/ThemeToggle";

//context
import { useCategory } from "@/app/context/CategoryContext";
import { useTheme } from "@/app/context/ThemeContext";

//type
import { CartItemsType } from "@/app/types/cart";

//utils
import { filterItems } from "@/app/utils/functions";

//style
import { StyledItemsContainer } from "../StyledComponents/ItemsContainer.styled";

type Props = {
  items: CartItemsType[];
};
export default function ItemsContainer({ items }: Props) {
  const { category } = useCategory();
  const { theme } = useTheme();

  const [search, setSearch] = useState("");
  const filteredItems = filterItems(search, category, items);

  return (
    <StyledItemsContainer theme={theme}>
      <Filter setSearch={setSearch} />
      <div className="items">
        {filteredItems.map((item: CartItemsType) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </StyledItemsContainer>
  );
}
