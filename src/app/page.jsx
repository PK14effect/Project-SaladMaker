"use client"

import Nav from "./Nav/Nav";
import React, { useState, useEffect } from 'react';
import YourIngredientsPage from "./YourIngredients/page";

export default function Home() {

  return (
    <main>
      <div className="flex">
        <Nav />
        <YourIngredientsPage />
      </div>
    </main>
  );
}
