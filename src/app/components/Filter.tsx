"use client";
import { useState } from "react";

//components
import Button from "./General/Button";
import CategoryModal from "./Modals/CategoryModal";

//context
import { useCategory } from "../context/CategoryContext";
import { useTheme } from "../context/ThemeContext";

//style
import { StyledFilter } from "./StyledComponents/Filter.styled";

type Props = {
  setSearch: (search: string) => void;
};
const Filter = ({ setSearch }: Props) => {
  const { category, setCategory } = useCategory();
  const { theme } = useTheme();
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  return (
    <StyledFilter theme={theme}>
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
          <Button
            version="filter"
            borderColor="transparent"
            backgroundColor="#b61a1a"
            handleClick={() => setCategory("")}
          >
            <p className="clear-paragraph"> clear filter</p>
          </Button>
        ) : (
          <Button
            handleClick={() => setShowCategoryModal(true)}
            borderColor="#46940d"
            version="filter"
          >
            <p className="change-paragraph">CHANGE</p>
          </Button>
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
