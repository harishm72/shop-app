import Header from "../components/header";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ProductCard from "../components/productCard";
import { useEffect, useState } from "react";

function WomensWear() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await (await fetch("../data/ladies_outerwear.json")).json();
        setProducts(res);
      };

      fetchData();
    } catch (error) {}
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <section className="mens-outerwear">
        <img
          className="mens-outerwear-img"
          src="../images/ladies_outerwear.jpg"
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
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default WomensWear;
