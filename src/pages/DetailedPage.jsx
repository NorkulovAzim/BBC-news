import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SavedIcon from "../assets/saved.svg";

const DetailedPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

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
          <button>
            <img src={SavedIcon} alt="" />
          </button>
        </div>
        <img
          src={product.images?.[0]}
          alt={product.title}
          style={{ width: "300px", borderRadius: "8px" }}
        />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating}/5</p>
        <p>Brand: {product.brand || "N/A"}</p>
      </div>
    </section>
  );
};

export default DetailedPage;
