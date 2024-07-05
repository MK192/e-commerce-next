//components
import Modal from "./Modal";
import Button from "../General/Button";

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
          <Button
            handleClick={() => {
              setCategory("electronics");
              setShowModalCategory(false);
            }}
          >
            electronics
          </Button>
          <Button
            handleClick={() => {
              setCategory("jewelery");
              setShowModalCategory(false);
            }}
          >
            jewelery
          </Button>
          <Button
            handleClick={() => {
              setCategory("men's clothing");
              setShowModalCategory(false);
            }}
          >
            men&apos;s clothing
          </Button>
          <Button
            handleClick={() => {
              setCategory("women's clothing");
              setShowModalCategory(false);
            }}
          >
            women&apos;s clothing
          </Button>
        </div>
      </StyledCategoryModal>
    </Modal>
  );
};

export default CategoryModal;
