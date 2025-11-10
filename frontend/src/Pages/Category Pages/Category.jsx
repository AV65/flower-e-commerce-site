import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Category.css";
import StampImage from "../../assets/fresh-hero.webp";

const Category = () => {
  const { categoryType } = useParams();
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Friendly display names
  const displayNames = {
    "Fresh-flowers": "Fresh Flowers",
    "dry-flowers": "Dry Flowers",
    "live-plants": "Live Plants",
    "aroma-candles": "Aroma Candles",
    "fresheners": "Fresheners",
  };

  const categoryName = displayNames[categoryType];

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

        const flowerList = Array.isArray(data) ? data : data.flowers || [];

        // ✅ Normalize function (makes category matching flexible)
        const normalize = (str) =>
          str?.toString().trim().toLowerCase().replace(/\s|-/g, "");

        const filtered = flowerList.filter((flower) => {
          const cat =
            flower.Category ||
            flower.category ||
            flower.type ||
            flower.CategoryName;
          return normalize(cat) === normalize(categoryName);
        });

        setFlowers(filtered);
      } catch (err) {
        console.error("Error fetching flowers:", err);
        setError("Error fetching flowers.");
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
              <img
                src={flower.Image || flower.image}
                alt={flower.Title || flower.name}
              />
              <div className="flower-np">
                <h6>{flower.Title || flower.name}</h6>
                <p>Price: ${Number(flower.Price || flower.price).toLocaleString()}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
