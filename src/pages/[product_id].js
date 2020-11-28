import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

function ProductPage(props) {
  console.log(props);
  const router = useRouter();
  const { product_id, category } = router.query;

  console.log({ product_id, category });

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!product_id || !category) {
      return;
    }
    try {
      setLoading(true);
      const fetchData = async () => {
        const res = await (await fetch(`../data/${category}.json`)).json();
        const [productInfo] = res.filter(
          (item) => item.id === parseInt(product_id, 10)
        );
        if (productInfo) {
          setData(productInfo);
        }
      };

      fetchData();
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [product_id, category]);

  if (error) {
    return <h1>404</h1>;
  }

  console.log(isLoading);
  console.log(data);

  return (
    <div>
      {!data ? (
        <h1>Loading</h1>
      ) : (
        <section className="product">
          <div className="product-img">
            <img src={`./${data.image || ""}`} />
          </div>
          <div className="product-info">
            <h1 className="product-title">{data.name}</h1>
            <p className="product-price">${data.price}</p>
            <div className="size">
              <label for="size">Size</label>
              <select>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M" selected>
                  M
                </option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="quantity">
              <label for="quantity">Quantity</label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <p className="description-head">Description</p>
              <div className="description">
                {ReactHtmlParser(data.description)}
              </div>
            </div>
            <div>
              <Link href="/cart">
                <button>ADD TO CART</button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductPage;
