"use client";
import React, { useState } from 'react';
import RecipePopup from '../RecipePopup/page';

function YourIngredientsPage({ totalCount, totalCalories }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="p-4">
            <div className="flex items-center p-4 bg-yellow-500 rounded-lg">
                <div className="flex items-center bg-white p-2 rounded-lg mr-4">
                    <span className="text-yellow-500 font-bold">{totalCount}</span>
                </div>
                <div className="flex-grow text-white font-medium">Your Ingredients</div>
                <div className="flex items-center text-white font-medium mr-4">{totalCalories} Cal</div>
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded-lg"
                    onClick={() => setIsPopupOpen(true)}
                >
                    Create Recipe
                </button>
            </div>

            {isPopupOpen && <RecipePopup onClose={() => setIsPopupOpen(false)} />}
        </div>
    );
}

export default YourIngredientsPage;


















