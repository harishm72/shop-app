function Checkout() {
  return (
    <div>
      <header className="shop">
        <i className="hidden-menu">&#x2630;</i>
        <a href="./index.html" className="shop-title">
          SHOP
        </a>
        <a href="./cart.html">
          <i style={{fontSize:24 }}s className="fa">
            &#xf07a;
          </i>
        </a>
      </header>
      <section className="checkout">
        <div>Checkout</div>
        <div id="demo">Shop is a demo app - form data will not be sent</div>
      </section>
      <section className="billing-info">
        <form className="acc-info">
          <p className="info-headings">Account Information</p>
          <div className="input-anim">
            <input type="text" required />
            <label>E-mail</label>
          </div>

          <div className="input-anim">
            <input type="text" required />
            <label>Phone Number</label>
          </div>
          <p className="info-headings">Shipping Address</p>
          <div className="input-anim">
            <input type="text" required />
            <label>Address</label>
          </div>
          <div className="input-anim">
            <input type="text" required />
            <label>City</label>
          </div>
          <div className="zipcode">
            <div className="input-anim">
              <input type="text" required />
              <label>State/Province</label>
            </div>
            <div className="input-anim">
              <input type="text" required />
              <label>Zip/Postal Code</label>
            </div>
          </div>

          <div className="country-name">
            <label>Country</label>
            <select for="Country">
              <option selected>United States</option>
              <option>Canada</option>
            </select>
          </div>
          <p className="info-headings">Billing Address</p>
          <div className="check">
            <input className="diff-bill-checkbox" type="checkbox" />
            <p> Use different billing addres</p>
          </div>

          <div className="input-anim">
            <input type="text" required />
            <label>Address</label>
          </div>
          <div className="input-anim">
            <input type="text" required />
            <label>City</label>
          </div>
          <div className="zipcode">
            <div className="input-anim">
              <input type="text" required />
              <label>State/Province</label>
            </div>
            <div className="input-anim">
              <input type="text" required />
              <label>Zip/Postal Code</label>
            </div>
          </div>
          <div className="country-name">
            <label>Country</label>
            <select for="Country">
              <option selected>United States</option>
              <option>Canada</option>
            </select>
          </div>
        </form>
        <form className="payment-info">
          <p className="info-headings">Payment Method</p>
          <div className="input-anim">
            <input type="text" required />
            <label>Cardholder Name</label>
          </div>
          <div className="input-anim">
            <input type="text" required />
            <label>Card Number</label>
          </div>
          <div className="card-info">
            <div className="expiry-date">
              <p>Expiry</p>
              <select for="expiry-date">
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </select>
            </div>
            <div className="expiry-year">
              <select for="year">
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
            </div>
            <div id="cvv" className="input-anim">
              <input type="text" required />
              <label>CVV</label>
            </div>
          </div>
          <section className="order-summary">
            <p className="info-headings">Order Summary</p>
            <div className="order-details">
              <p>YouTube Unisex Flex Fleece Zip Hoodie</p>
              <p>$45.25</p>
            </div>
            <div className="order-details">
              <p>Total</p>
              <p>$45.25</p>
            </div>
            <button className="place-order-btn">PLACE ORDER</button>
          </section>
        </form>
      </section>
    </div>
  );
}

export default Checkout;