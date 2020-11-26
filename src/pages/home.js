import Link from "next/link";
import Header from "../components/header";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <CategorySection
        link="/mens-wear"
        title="Men's Outerwear"
        imgURL="../images/mens_outerwear.jpg"
      />
      <CategorySection
        link="/womens-wear"
        title="Ladies Outerwear"
        imgURL="../images/ladies_outerwear.jpg"
      />
      <section className="tshirts">
        <CategorySection
          link="/mens-tshirts"
          title="Men's T-Shirts"
          imgURL="../images/mens_tshirts.jpg"
        />
        <CategorySection
          link="/womens-tshirts"
          title="Ladies T-Shirts"
          imgURL="../images/ladies_tshirts.jpg"
        />
      </section>
      <Footer />
    </div>
  );
}

export default Home;

const CategorySection = (props) => {
  const { link, imgURL, title } = props;
  return (
    <section className="mens-outerwear">
      <Link href={link}>
        <img src={imgURL} alt="Men's Outerwear" />
      </Link>
      <p className="category-title">{title}</p>
      <Link href={link}>
        <button>SHOP NOW</button>
      </Link>
    </section>
  );
};
