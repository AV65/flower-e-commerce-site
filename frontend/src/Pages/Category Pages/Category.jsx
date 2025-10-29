import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Category.css";
import StampImage from "../../assets/fresh-hero.webp";

const Category = () => {
  const { categoryType } = useParams();
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categoryMap = {
    "Fresh-flowers": "Fresh Flowers",
    "dry-flowers": "Dry Flowers",
    "live-plants": "Live Flowers",
    "aroma-candles": "Aroma Candels",
    "fresheners": "Fresheners",
  };

  const categoryName = categoryMap[categoryType];

  useEffect(() => {
    if (!categoryName) {
      setError("Invalid category");
      setLoading(false);
      return;
    }

    const fetchFlowers = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL || "https://flower-website-backend-two.onrender.com"}/api/flowers`
        );
        const data = await res.json();

        // In case the response is an array, not an object
        const flowerList = Array.isArray(data) ? data : data.flowers || [];

        const filtered = flowerList.filter(
          (flower) =>
            flower.Category &&
            flower.Category.toLowerCase() === categoryName.toLowerCase()
        );

        setFlowers(filtered);
      } catch (err) {
        setError("Error fetching flowers.");
        console.error("Error fetching flowers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlowers();
  }, [categoryName]);

  if (loading) return <div className="flowerloading">Loading flowers...</div>;
  if (error) return <div>{error}</div>;
  if (flowers.length === 0)
    return (
      <div className="noflowersm">
        No flowers found in the "{categoryName}" category.
      </div>
    );

  return (
    <div className="category-page">
      <div className="category-stamp-img">
        <img className="category-stamp" src={StampImage} alt="stamp" />
        <h3>{categoryName}</h3>
      </div>

      <div className="flowers-grid">
        {flowers.map((flower) => (
          <Link to={`/product/${flower._id}`} key={flower._id}>
            <div className="flower-item">
              <img src={flower.Image} alt={flower.Title} />
              <div className="flower-np">
                <h6>{flower.Title}</h6>
                <p>Price: ${flower.Price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
