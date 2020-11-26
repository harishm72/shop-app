import Header from "../components/header";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ProductCard from "../components/productCard";
import { useEffect, useState } from "react";

function WomensTShirts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await (await fetch("../data/ladies_tshirts.json")).json();
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
          src="../images/ladies_tshirts.jpg"
          alt="Ladies's T-Shirts"
        />
        <p className="shop-category">Ladies T-Shirts</p>
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

export default WomensTShirts;
