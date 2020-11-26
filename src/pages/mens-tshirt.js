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
        const res = await (await fetch("../data/mens_tshirt.json")).json();

        setProducts(res.slice(0, 21)); // after 21 images aren't available
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
          src="../images/mens_tshirts.jpg"
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
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default WomensWear;
