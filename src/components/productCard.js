import Link from "next/link";

function ProductCard(props) {
  const { imgSrc, title, price, id, category } = props;
  return (
    <li>
      <Link href={`/${id}?category=${category}`}>
        <img src={`/shop-app/${imgSrc}`} />
      </Link>
      <p className="item-name">{title}</p>
      <p className="price">{price}</p>
    </li>
  );
}

export default ProductCard;
