import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css"; // استيراد ملف CSS لتنسيق الصفحة

const Recipe = () => {
  const [item, setItem] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const { recipeId } = useParams();

  useEffect(() => {
    if (recipeId) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.meals && data.meals.length > 0) {
            setItem(data.meals[0]);
            const strYoutube = data.meals[0].strYoutube;
            const id = strYoutube.split("=")[1];
            setVideoId(id);
          }
        })
        .catch((error) => console.error("Error fetching meal:", error));
    }
  }, [recipeId]);

  return (
    <div className="recipe-container">
      {item && (
        <div className="recipe-content">
          <div className="recipe-header">
            <h1>{item.strMeal}</h1>
            <h2>{item.strArea} Food</h2>
            <h3>Category: {item.strCategory}</h3>
          </div>
          <div className="recipe-image">
            <img src={item.strMealThumb} alt={item.strMeal} />
          </div>
          <div className="recipe-details">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <ul>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                  const ingredient = item[`strIngredient${index}`];
                  const measure = item[`strMeasure${index}`];
                  if (ingredient && measure) {
                    return (
                      <li key={index}>{ingredient}: {measure}</li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <p>{item.strInstructions}</p>
            </div>
          </div>
          {videoId && (
            <div className="recipe-video">
              <iframe
                width="100%"
                height="315"
                title="recipeVideo"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Recipe;
