import { useEffect, useState } from "react";

import ProductCard from "../components/productCard";

function WomensWear() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await (await fetch("/shop-app/data/mens_tshirt.json")).json();

        setProducts(res.slice(0, 21)); // after 21 images aren't available
      };

      fetchData();
    } catch (error) {}
  }, []);

  return (
    <div>
      <section className="mens-outerwear">
        <img
          className="mens-outerwear-img"
          src="/shop-app/images/mens_tshirts.jpg"
          alt="Men's T-Shirts"
        />
        <p className="shop-category">Mens T-Shirts</p>
        <p className="mens-outerwear-quantity">({products.length} items)</p>
      </section>
      <ul className="mens-apparel">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imgSrc={`./${product.image}`}
            title={product.title}
            price={product.price}
            category="ladies_tshirt"
          />
        ))}
      </ul>
    </div>
  );
}

export default WomensWear;
