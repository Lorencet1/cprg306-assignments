"use client"

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas({ ingredient }){
    const[meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        try{
            const data = await fetchMealIdeas(ingredient);
            setMeals(data);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);
    
    return (
        <div className="">
            <h1>Meal Ideas for {ingredient}</h1>
            <ul>
                {meals !==null && meals !== undefined ?
                meals.map(meal => (
                    <li key={meal.idMeal}className="border-2 border-blue bg-cyan-700 m-2 p-2">{meal.strMeal}</li>
                )) : "unavailable"}
            </ul>
        </div>
    );
}




