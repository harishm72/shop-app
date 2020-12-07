import Link from "next/link";

function cart() {
  return (
    <div>
      <div className="info">
        <h4>Your Cart</h4>
        <p className="cart-items">(1 item)</p>
      </div>
      <section className="cart">
        <div className="item-image">
          <img src="/shop-app/images/cart-images/10-14158B.jpg" />
          <p className="cart-item-name">Recycled Plastic Bottle Hoodie-Green</p>
        </div>
        <div className="item-info">
          <div className="cart-quantity">
            <label htmlFor="cart-quantity">Qty:</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <p>Size: M</p>
          <p>$60.95</p>
        </div>
        <p className="cancel-button">&times;</p>
      </section>
      <div className="total">
        <p className="total-price">Total: &nbsp; &nbsp; &nbsp; $99.00</p>
        <Link href="/checkout">
          <button type="submit">CHECK OUT</button>
        </Link>
      </div>
    </div>
  );
}

export default cart;
