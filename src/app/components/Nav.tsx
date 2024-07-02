import { forwardRef } from "react";

//components
import Cart from "./Cart";

//style
import { StyledNav } from "./StyledComponents/Nav.styled";

type Props = {
  setShowModalCart: (showModalCart: boolean) => void;
  active: boolean;
};

const Nav = forwardRef<HTMLInputElement, Props>(
  ({ setShowModalCart, active }: Props, ref) => {
    return (
      <StyledNav active={active}>
        <strong>STORE</strong>
        <div className="cart-nav" ref={ref}>
          <div className="cart-item-hidden-nav">Hid</div>
          {active ? <div className="cart-item-nav">ITEM(S) ADDED</div> : null}
          <Cart />
        </div>
      </StyledNav>
    );
  }
);
Nav.displayName = "Nav";
export default Nav;
