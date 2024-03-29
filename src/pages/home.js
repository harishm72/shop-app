import Link from "next/link";

function Home() {
  return (
    <div>
      <CategorySection
        link="/mens-wear"
        title="Men's Outerwear"
        imgURL="/shop-app/images/mens_outerwear.jpg"
      />
      <CategorySection
        link="/womens-wear"
        title="Ladies Outerwear"
        imgURL="/shop-app/images/ladies_outerwear.jpg"
      />

      <div className="flex">
        <CategorySection
          link="/mens-tshirt"
          title="Men's T-Shirts"
          imgURL="/shop-app/images/mens_tshirts.jpg"
          className="mens-tshirts"
        />
        <CategorySection
          link="/womens-tshirt"
          title="Ladies T-Shirts"
          imgURL="/shop-app/images/ladies_tshirts.jpg"
          className="ladies-tshirts"
        />
      </div>
    </div>
  );
}

export default Home;

const CategorySection = (props) => {
  const { link, imgURL, title, className } = props;
  return (
    <section key={link} className={className || "mens-outerwear"}>
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
