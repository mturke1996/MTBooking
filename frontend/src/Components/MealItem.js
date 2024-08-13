import React from "react";
import { Link } from "react-router-dom";
import "./MealItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const MealItem = ({ data }) => {
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => (
            <div className="meal-card" key={item.idMeal}>
              <img
                className="meal-image"
                src={item.strMealThumb}
                alt={item.strMeal}
              />
              <div className="meal-details">
                <h3 className="meal-title">{item.strMeal}</h3>
                <p className="meal-category">Category: {item.strCategory}</p>
                {/* Using Link to navigate to recipe */}
                <Link to={`/foodList/${item.idMeal}`}>
                  <button className="btn" variant="primary">
                    Show Recipe
                  </button>
                </Link>
              </div>
            </div>
          ))}
    </>
  );
};

export default MealItem;
