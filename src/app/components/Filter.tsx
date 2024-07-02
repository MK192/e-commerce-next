"use client";

//components
import CategoryModal from "./modals/CategoryModal";

//context
import { useCategory } from "../context/CategoryContext";
import { useState } from "react";

//style
import { StyledFilter } from "./StyledComponents/Filter.styled";

type Props = {
  setSearch: (search: string) => void;
};
const Filter = ({ setSearch }: Props) => {
  const { category, setCategory } = useCategory();
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  return (
    <StyledFilter>
      <div className="search" id="categoryId">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Start searching..."
        />
      </div>
      <div className="category">
        <strong>Category:</strong> {category}
        {category ? (
          <button className="selected-category" onClick={() => setCategory("")}>
            clear filter
          </button>
        ) : (
          <button
            className="selected-all"
            onClick={() => setShowCategoryModal(true)}
          >
            CHANGE
          </button>
        )}
      </div>
      {showCategoryModal ? (
        <CategoryModal
          setShowModalCategory={setShowCategoryModal}
          domNode={document.getElementById("categoryId")}
        />
      ) : null}
    </StyledFilter>
  );
};
export default Filter;
