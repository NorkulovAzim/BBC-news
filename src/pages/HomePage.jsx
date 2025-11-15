import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import NewsCard from "../assets/newsCard.svg";
import Poster from "../assets/Poster.svg";
import ArrowSvg from "../assets/arrow.svg";
import LatestCard from "../assets/latestcard.svg";
import CarSvg from "../assets/car.svg";
import DoctorSvg from "../assets/doctor.svg";
import TechnoSvg from "../assets/techno1.svg";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products.slice(0, 4));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleNewsClick = (productId) => {
    navigate(`/detailed?id=${productId}`);
  };

  return (
    <section className="home-page">
      <div className="container">
        <h2 className="short-news-title">Short news</h2>
        <div className="short-news">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="news-1"
                onClick={() => handleNewsClick(product.id)}
                style={{ cursor: "pointer" }}
              >
                {/* <img
                  src={product.images?.[0] || NewsCard}
                  alt={product.title}
                /> */}
                <img src={NewsCard} alt="" />
                <div className="news-content">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading news...</p>
          )}
        </div>

        <div className="poster-news">
          <img src={Poster} alt="" />
        </div>

        <div className="poster-content">
          <div className="poster-status">
            <p>Culture</p>
            <p>Guy Hawkins</p>
          </div>

          <div className="poster-date">
            <p>{today}</p>
          </div>
        </div>

        <div className="poster-title">
          <h2>{products[0]?.title}</h2>
        </div>

        <div className="latest-news">
          <h2>Latest News</h2>
          <div className="view-all">
            <NavLink to="/">
              <p>View all</p>
              <img src={ArrowSvg} alt="" />
            </NavLink>
          </div>
        </div>

        <div className="latest-line"></div>

        <div className="latest-news-card">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/WDLYCTLdeVM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="latest-cards">
            <div className="latest-card-1">
              <img src={LatestCard} alt="" />
              <p>{products[0]?.description}</p>
            </div>

            <div className="latest-card-1">
              <img src={CarSvg} alt="" />
              <p>{products[0]?.description}</p>
            </div>

            <div className="latest-card-1">
              <img src={DoctorSvg} alt="" />
              <p>{products[0]?.description}</p>
            </div>
          </div>
        </div>

        <div className="technology-news">
          <h2>TECHNOLOGY News</h2>
          <div className="view-all">
            <NavLink to="/">
              <p>View all</p>
              <img src={ArrowSvg} alt="" />
            </NavLink>
          </div>
        </div>

        <div className="technology-line"></div>

        <div className="technology-news-card">
          {products.map((product) => (
            <div key={product.id} className="technology-card">
              <img src={product.images?.[0]} />
              <p>
                {product.title} - {today}
              </p>
              <p className="technology-description">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="podcast">
          <h2>podcasts</h2>
          <div className="view-all">
            <NavLink to="/">
              <p>View all</p>
              <img src={ArrowSvg} alt="" />
            </NavLink>
          </div>
        </div>

        <div className="podcast-line"></div>

        <div className="podcast-cards">
          {products.slice(0, 3).map((podcast) => (
            <div key={podcast.id} className="podcast-card-1">
              <img src={podcast.images?.[0]} alt={podcast.title} />
              <div className="podcast-description">
                <p>{podcast.title}</p>
                <p>{podcast.description}</p>
                <p>{today}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-line"></div>
      </div>
    </section>
  );
};

export default HomePage;
