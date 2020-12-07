import { useEffect, useState } from "react";

import NavBar from "../components/navbar";
import ProductCard from "../components/productCard";

function MensOuterwear() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await (await fetch("/shop-app/data/mens_outerwear.json")).json();
        setProducts(res);
      };

      fetchData();
    } catch (error) {}
  }, []);

  return (
    <div>
      <section className="mens-outerwear">
        <img
          className="mens-outerwear-img"
          src="/shop-app/images/mens_outerwear.jpg"
          alt="Men's Outerwear"
        />
        <p className="shop-category">Men's Outerwear</p>
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
            category="mens_outerwear"
          />
        ))}
      </ul>
    </div>
  );
}

export default MensOuterwear;
