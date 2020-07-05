import Link from "next/link";
import { useUser } from "./User";
import NavStyles from "../styles/NavStyles";
import { useCheckout } from "./LocalState";
import Signout from "./Signout";

function Nav() {
  const me = useUser();
  const { toggleCheckout } = useCheckout();
  return (
    <NavStyles data-testid="nav">
      <Link href="/used-cars">
        <a>Used Cars</a>
      </Link>
      {me && (
        <>
          <Link href="/track-your-order">
            <a>Track Your Order</a>
          </Link>
          <Link href="/me">
            <a>Account</a>
          </Link>
          <Signout />

          <button type="button" onClick={toggleCheckout}>
            Checkout
          </button>
        </>
      )}
      {!me && (
        <Link href="/signup">
          <a>Sign In</a>
        </Link>
      )}
    </NavStyles>
  );
}

export default Nav;
