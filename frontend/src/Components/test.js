import React from "react";
import "./MealItem.css";
import { Link, useNavigate } from "react-router-dom";
const MealItem = ({ data }) => {
  console.log(data);
  let navigate = useNavigate();
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <div
                className="meal-card"
                key={item.idMeal}
                onClick={() => navigate(`/${item.idMeal}`)}
              >
                <img
                  className="meal-image"
                  src={item.strMealThumb}
                  alt={item.strMeal}
                />
                <div className="meal-details">
                  <h3 className="meal-title">{item.strMeal}</h3>
                  <p className="meal-category">Category: {item.strCategory}</p>
                  <Link to={`/foodList/${data.idMeal}`}>
                    <button className="btn" variant="primary">
                      Show Recipe
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
    </>
  );
};
export default MealItem;
