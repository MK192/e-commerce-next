"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface CategoryContextDefaultValue {
  category: string;
  setCategory: (newCategory: string) => void;
}

export const CategoryDataContext = createContext<CategoryContextDefaultValue>({
  category: "",
  setCategory: function (newCategory: string): void {
    throw new Error("Function not implemented.");
  },
});

type Props = {
  children: ReactNode;
};

const CategoryContext = ({ children }: Props) => {
  const [category, setCategory] = useState("");

  return (
    <CategoryDataContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryDataContext.Provider>
  );
};
export default CategoryContext;

export function useCategory() {
  return useContext(CategoryDataContext);
}
