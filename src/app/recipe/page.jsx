"use client"

import React from 'react'
import Nav from '../Nav/Nav'
import RecipeCard from '../RecipeCard/page'

const recipes = [];

function RecipePage() {
    return (
        <div className="flex">
            <Nav />
            <div className="w-full bg-gray-100 p-8">
                <h1 className="text-3xl font-bold mb-6">Recipe</h1>
                <h2 className="text-xl mb-4">Your Recipe</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {recipes.map((recipe, index) => (
                        <RecipeCard key={index} name={recipe.name} calories={recipe.calories} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecipePage







