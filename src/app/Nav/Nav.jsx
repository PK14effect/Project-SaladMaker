"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Nav() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const storedLink = localStorage.getItem('activeLink');
    if (storedLink) {
      setActiveLink(storedLink);
    }
  }, []);

  useEffect(() => {
    if (activeLink) {
      localStorage.setItem('activeLink', activeLink);
    }
  }, [activeLink]);

  return (
    <div>
      <nav className="flex flex-col items-center py-4 p-[40px] pt-[40px] bg-white shadow-md h-screen">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">SALADMAKER</h1>
        </div>
        <div className="mb-4">
          <Link href="/saladmaker" legacyBehavior>
            <a
              className={`flex items-center px-4 py-2 rounded-md w-[200px] ${activeLink === 'saladmaker' ? 'text-white bg-yellow-500' : 'text-gray-500 bg-gray-100'}`}
              onClick={() => setActiveLink('saladmaker')}
            >
              <span role="img" aria-label="salad">🥗</span>
              <span className="ml-2">Salad maker</span>
            </a>
          </Link>
        </div>

        <div>
          <Link href="/recipe" legacyBehavior>
            <a
              className={`flex items-center px-4 py-2 rounded-md w-[200px] ${activeLink === 'recipe' ? 'text-white bg-yellow-500' : 'text-gray-500 bg-gray-100'}`}
              onClick={() => setActiveLink('recipe')}
            >
              <span role="img" aria-label="recipe">📄</span>
              <span className="ml-2">Recipe</span>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;






