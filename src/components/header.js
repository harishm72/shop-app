import Link from "next/link";
import { ShoppingCart } from "phosphor-react";

function Header() {
  return (
    <div className="shop-header">
      <span className="hidden-menu menu-icon pointer">&#x2630;</span>
      <span className="shop-title-link pointer">
        <span className="shop-title">
          <Link href="/" >SHOP</Link>
        </span>
      </span>
      <span className="cart-link pointer">
        <Link href="/cart">
          <ShoppingCart fontSize={24} />
        </Link>
      </span>
    </div>
  );
}

export default Header;
