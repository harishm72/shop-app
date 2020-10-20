import Link from "next/link";

function ProductPage() {
  return (
    <div>
      <div className="shop">
        <a href="./mens-outerwear.html">
          <i style={{ fontSize: 24 }} className="fa">
            &#xf177;
          </i>
        </a>
        <Link href="/" className="shop-title">
          SHOP
        </Link>
        <Link href="/cart">
          <i style={{ fontSize: 24 }} className="fa">
            &#xf07a;
          </i>
        </Link>
      </div>
      <nav className="nav-menu">
        <a href="./mens-outerwear.html">Men's Outerwear</a>
        <a>Ladies Outerwear</a>
        <a>Men's T-Shirts</a>
        <a>Ladies T-Shirts</a>
      </nav>
      <section className="product">
        <div className="product-img">
          <img src="../images/product-info/bigimage.jpg" />
        </div>
        <div className="product-info">
          <h1 className="product-title">
            Recycled Plastic Bottle Hoodie - Green
          </h1>
          <p className="product-price">$60.95</p>
          <div className="size">
            <label for="size">Size</label>
            <select>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M" selected>
                M
              </option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="quantity">
            <label for="quantity">Quantity</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <p className="description-head">Description</p>
            <p className="description">
              Ever wonder where all of the disposable water bottles of the world
              end up? We know some of them are reused for a second purpose. Each
              of these hoodies contain approximately 9 recycled water bottles
              that are woven into the fabric.
            </p>
          </div>
          <div className="features">
            <p>Features:</p>
            <ul>
              <li>50% recycled cotton, 50% recycled polyester.</li>
              <li>Full zipper and orange drawstring pulls.</li>
              <li>USA made.</li>
              <li>
                Available in forest green with the white Google logo embroidered
                at left bicep.
              </li>
            </ul>
          </div>
          <div>
            <Link href="/cart">
              <button>ADD TO CART</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;