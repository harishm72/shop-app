import Link from "next/link";

function Header() {
  return (
    <div className="shop">
      <span className="hidden-menu">&#x2630;</span>
      <Link href="/" className="shop-title">
        <a>SHOP</a>
      </Link>
      <Link href="/cart">
        <span style={{ fontSize: 24 }} className="fas fa-shopping-cart">
          Cart
        </span>
      </Link>
    </div>
  );
}

export default Header;
