"use client"

import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import Image from 'next/image';
import NextLogo from '../../../public/img/FreshTastySalad.png';
import YourIngredientsPage from '../YourIngredients/page';

function SalamakerPage() {
    const [data, setData] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [counts, setCounts] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            let url = '/components/api';
            if (selectedCategories.length > 0) {
                url += `?category=${selectedCategories.join(',')}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, [selectedCategories]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const categories = ['vegetable', 'fruit', 'toppings', 'protein', 'dressing'];

    const SelectCategoryClick = (category) => {
        setSelectedCategories((prevSelectedCategories) =>
            prevSelectedCategories.includes(category)
                ? prevSelectedCategories.filter((c) => c !== category)
                : [...prevSelectedCategories, category]
        );
    };

    const incrementCount = (ingredient) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [ingredient]: (prevCounts[ingredient] || 0) + 1,
        }));
    };
    const decrementCount = (ingredient) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [ingredient]: Math.max((prevCounts[ingredient] || 1) - 1, 0),
        }));
    };

    const totalCount = Object.values(counts).reduce((sum, count) => sum + count, 0);
    const totalCalories = data.reduce((sum, val) => {
        const ingredientCount = counts[val.ingredient] || 0;
        return sum + (val.calories * ingredientCount);
    }, 0);

    const filteredData = data.filter(val =>
        val.ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex">
            <Nav />
            <div className="flex flex-col">
                <div className="px-7 py-5 flex justify-between items-center">
                    <h1 className="font-semibold text-black-800 font-bold text-xl">Let's Create...your own salad!!!</h1>
                    <div className="flex items-center border border-gray-300 rounded-lg p-2 shadow-md w-96">
                        <svg className="w-5 h-5 mr-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <input
                            type="text"
                            placeholder="Search ingredients to make a salad..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border-none focus:ring-0"
                            style={{ outline: 'none' }}
                        />
                    </div>
                </div>
                <div className="px-7 py-5">
                    <Image src={NextLogo} alt="NextLogo" />
                </div>
                {/* Select Category */}
                <div className="px-7 py-5">
                    <h1 className="font-semibold text-black-800">Select Category</h1>
                    <div className="py-5 flex cursor-pointer">
                        <ul className="flex">
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className={`relative mr-4 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden text-center p-7 flex flex-col items-center`}
                                    onClick={() => SelectCategoryClick(category)}
                                >
                                    {category}
                                    {selectedCategories.includes(category) && (
                                        <svg
                                            className="absolute top-0 right-0 m-2"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="10" cy="10" r="10" fill="#22C55E" />
                                            <path
                                                d="M8.33334 13.3334L5 10L6.16667 8.83337L8.33334 11.0001L13.8333 5.50012L15 6.66679L8.33334 13.3334Z"
                                                fill="white"
                                            />
                                        </svg>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="px-7 py-5">
                    <h1 className="font-semibold text-black-800">Choose your ingredients to make a salad</h1>
                </div>
                <div className="p-7">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-0 list-none">
                        {filteredData.map((val) => (
                            <li
                                key={val.ingredient}
                                className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden text-center p-4 flex flex-col items-center"
                            >
                                <img
                                    src={val.image}
                                    alt={val.ingredient}
                                    className="w-full h-auto rounded-lg mb-4"
                                />
                                <h3 className="text-lg text-gray-500 text-left w-full">
                                    {val.ingredient}
                                </h3>
                                <h1 className="text-xl font-bold text-black-500 text-left w-full">
                                    {val.calories} <span className="text-orange-500">Cal</span>
                                </h1>
                                <p className="flex justify-end w-full">
                                    <svg
                                        className="cursor-pointer"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 40 41"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        onClick={() => decrementCount(val.ingredient)}
                                    >
                                        <rect y="0.666748" width="40" height="40" rx="20" fill="#F8B602" />
                                        <path d="M14 20.6667L26 20.6667" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                    <h1 className="flex items-center mx-4">{counts[val.ingredient] || 0}</h1>
                                    <svg
                                        className="cursor-pointer"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 40 41"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        onClick={() => incrementCount(val.ingredient)}
                                    >
                                        <rect y="0.666687" width="40" height="40" rx="20" fill="#F8B602" />
                                        <g clipPath="url(#clip0_838_450)">
                                            <path
                                                d="M26.6344 19.3136H21.5375V14.0323C21.5375 13.2761 20.925 12.6636 20.1687 12.6636C19.4125 12.6636 18.8 13.2761 18.8 14.0323V19.3136H13.3625C12.6125 19.3136 12 19.9261 12 20.6823C12 21.4386 12.6125 22.0511 13.3687 22.0511H18.8063V27.3011C18.8063 28.0573 19.4188 28.6698 20.175 28.6698C20.9313 28.6698 21.5437 28.0573 21.5437 27.3011V22.0511H26.6406C27.3969 22.0511 28.0094 21.4386 28.0094 20.6823C28 19.9261 27.3906 19.3136 26.6344 19.3136Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_838_450">
                                                <rect
                                                    width="16"
                                                    height="16"
                                                    fill="white"
                                                    transform="translate(12 12.6667)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <YourIngredientsPage totalCount={totalCount} totalCalories={totalCalories} />
            </div>

        </div>
    );
}

export default SalamakerPage;

















