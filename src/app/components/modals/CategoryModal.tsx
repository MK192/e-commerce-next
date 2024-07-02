//components
import Modal from "./Modal";

//context
import { useCategory } from "@/app/context/CategoryContext";

//style
import { StyledCategoryModal } from "../StyledComponents/CategoryModal.styled";

type Props = {
  setShowModalCategory: (showModalCategory: boolean) => void;
  domNode: HTMLElement | Element | DocumentFragment | null;
};
const CategoryModal = ({ setShowModalCategory, domNode }: Props) => {
  const { setCategory } = useCategory();

  return (
    <Modal
      title="Filter by category"
      setShowModal={setShowModalCategory}
      domNode={domNode}
    >
      <StyledCategoryModal>
        <div className="category-buttons">
          <button
            onClick={() => {
              setCategory("electronics");
              setShowModalCategory(false);
            }}
          >
            electronics
          </button>
          <button
            onClick={() => {
              setCategory("jewelery");
              setShowModalCategory(false);
            }}
          >
            jewelery
          </button>
          <button
            onClick={() => {
              setCategory("men's clothing");
              setShowModalCategory(false);
            }}
          >
            men&apos;s clothing
          </button>
          <button
            onClick={() => {
              setCategory("women's clothing");
              setShowModalCategory(false);
            }}
          >
            women&apos;s clothing
          </button>
        </div>
      </StyledCategoryModal>
    </Modal>
  );
};

export default CategoryModal;
