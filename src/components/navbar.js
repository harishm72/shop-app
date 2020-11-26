import Link from "next/link";

function NavBar() {
  return (
    <nav className="nav-menu">
      <Link href="/mens-wear">Men's Outerwear</Link>
      <Link href="/womens-wear">Ladies Outerwear</Link>
      <Link href="/mens-tshirt">Men's T-Shirts</Link>
      <Link href="/womens-tshirt">Ladies T-Shirts</Link>
    </nav>
  );
}

export default NavBar;
