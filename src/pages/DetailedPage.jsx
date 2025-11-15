import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DetailedPage = () => {
  const [product, setProduct] = useState(null);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");

  useEffect(() => {
    if (productId) {
      axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [productId]);

  if (!product) {
    return (
      <section>
        <div className="container">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container">
        <div className="detailed-title">
          <h1>{product.title}</h1>
        </div>
        <img
          src={product.images?.[0]}
          alt={product.title}
          style={{ width: "300px", borderRadius: "8px" }}
        />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </section>
  );
};

export default DetailedPage;
