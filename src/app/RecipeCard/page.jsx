"use client"

import React from 'react'

function RecipeCard({ name, calories }) {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-4 shadow-md text-white">
      <div className="text-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-2xl">{calories} <span className="font-bold">Cal</span></p>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
      </div>
    </div>
  )
}

export default RecipeCard








