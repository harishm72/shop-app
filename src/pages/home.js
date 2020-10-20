import Link from "next/link";

function Home() {
  return (
    <div>
      <div className="shop">
        <span className="hidden-menu">&#x2630;</span>
        <Link href="/" className="shop-title">
          <a>SHOP</a>
        </Link>
        <Link href="/cart">
          <a href="/cart">
            <span style={{ fontSize: 24 }} className="fas fa-shopping-cart">
              Cart
            </span>
          </a>
        </Link>
      </div>
      <nav className="nav-menu">
        <Link href="/mens">Men's Outerwear</Link>
        <a>Ladies Outerwear</a>
        <a>Men's T-Shirts</a>
        <a>Ladies T-Shirts</a>
      </nav>
      <section className="mens-outerwear">
        <Link href="/mens">
          <img src="../images/mens_outerwear.jpg" alt="Men's Outerwear" />
        </Link>
        <p className="category-title">Men's Outerwear</p>
        <Link href="/mens">
          <button>SHOP NOW</button>
        </Link>
      </section>
      <section className="ladies-outerwear">
        <img src="../images/ladies_outerwear.jpg" alt="Ladies Outerwear" />
        <p className="category-title">Ladies Outerwear</p>
        <button>SHOP NOW</button>
      </section>
      <section className="tshirts">
        <section className="mens-tshirts">
          <img src="../images/mens_tshirts.jpg" />
          <p className="category-title">Men's T-shirts</p>
          <button>SHOP NOW</button>
        </section>
        <section className="ladies-tshirts">
          <img src="../images/ladies_tshirts.jpg" />
          <p className="category-title">Ladies T-shirts</p>
          <button>SHOP NOW</button>
        </section>
      </section>
      <footer>
        <a>Made by Harish</a>
        <p className="demo-only">DEMO ONLY</p>
      </footer>
    </div>
  );
}

export default Home;
