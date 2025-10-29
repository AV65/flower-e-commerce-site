// src/Pages/Product Pages/Category.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const { categoryType } = useParams();
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryMap = {
    "Fresh-flowers": "Fresh-flowers",
    "dry-flowers": "dry-flowers",
    "live-plants": "live-plants",
    "aroma-candles": "aroma-candles",
    "fresheners": "fresheners",
  };

  const displayNames = {
    "Fresh-flowers": "Fresh Flowers",
    "dry-flowers": "Dry Flowers",
    "live-plants": "Live Plants",
    "aroma-candles": "Aroma Candles",
    "fresheners": "Fresheners",
  };

  const categoryName = categoryMap[categoryType];

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/flowers`);
        const data = await res.json();
        setFlowers(data);
      } catch (err) {
        console.error("Error fetching flowers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFlowers();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const filteredFlowers = flowers.filter(
    (flower) =>
      flower.Category &&
      flower.Category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className="category-container">
      <h3>{displayNames[categoryType]}</h3>

      {filteredFlowers.length > 0 ? (
        <div className="category-grid">
          {filteredFlowers.map((flower) => (
            <div className="category-item" key={flower._id}>
              <img src={flower.image} alt={flower.name} />
              <div className="category-info">
                <h4>{flower.name}</h4>
                <p>₦{Number(flower.price).toLocaleString()}</p>
                <Link to={`/product/${flower._id}`}>View</Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-category">No flowers found in this category.</div>
      )}
    </div>
  );
};

export default Category;
