"use client";
import { useState, useEffect } from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function MealIdeas({ingredient}){
    const [meal, setMeal] = useState([]);

    const fetchMealIdeas = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        setMeal(data.meals);
    };

    useEffect(() => {
        if (ingredient) {
          fetchMealIdeas();
        } else {
          // Clear the meal list when ingredient is empty
          setMeal([]);
        }
      }, [ingredient]);

    // useEffect(() => {
    //     fetchMealIdeas();
    // }, []);
    return ( ingredient &&
        <div className="flex flex-col flex-1 items-center w-full bg-green-400 rounded-lg p-4 my-4">
            <h1 className="text-xl text-green-500 bg-green-300 text-center m-4 rounded-md w-80 items-center">Meal Ideas for {ingredient}</h1>
            <div className="flex flex-col items-center w-full">
                {meal && meal.length > 0 ? (
                    <AnimatePresence>
                        <motion.ul initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} exit={{opacity:0}} className="flex flex-col bg-green-400">
                        {meal.map((meal) => (
                            <motion.li key={meal.idMeal} 
                                className="flex flex-col items-center w-full m-2"
                                initial={{opacity: 0, x: -50}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.5, x:50}}
                                exit={{opacity:0}} >
                                <p className="flex flex-col items-center w-full  bg-green-400 text-white">{meal.strMeal}</p>
                            </motion.li>
                        ))}
                        </motion.ul>
                    </AnimatePresence>
                ) : (
                    <AnimatePresence>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-white text-center"
                            >
                            No meal ideas found for the provided ingredient of {ingredient}.
                        </motion.p>
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
}
