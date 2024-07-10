//components
import Cart from "./Cart";
import ThemeToggle from "./General/ThemeToggle";

//style
import { StyledNav } from "./StyledComponents/Nav.styled";

export default function Nav() {
  return (
    <StyledNav>
      <strong>STORE</strong>
      <ThemeToggle />
      <div className="cart-nav">
        <div className="cart-item-hidden-nav">Hid</div>
        <Cart />
      </div>
    </StyledNav>
  );
}
