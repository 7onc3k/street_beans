'use client'

import { useState } from "react";
import { Coffee, Droplet, ShoppingBag } from "react-feather";
import React from "react";

const products = [
  {
    category: "Káva",
    items: [
      { name: "Espresso Illy", description: "Kvalitní italská káva připravená na profesionálním kávovaru", price: 45, icon: <Coffee /> },
      { name: "Cappuccino Illy", description: "Espresso s mléčnou pěnou a kakaovým posypem", price: 55, icon: <Coffee /> },
    ],
  },
  {
    category: "Graffiti potřeby",
    items: [
      { name: "Montana BLACK 400ml", description: "Vysoce krycí sprej pro graffiti, nitro-kombi složení, matný povrch", price: 159, icon: <Droplet /> },
      { name: "Molotow ONE4ALL Akrylový Marker 4mm", description: "Akrylový popisovač s výměnným hrotem, vhodný pro většinu povrchů", price: 119, icon: <Droplet /> },
    ],
  },
  {
    category: "Občerstvení",
    items: [
      { name: "Snickers", description: "Oblíbená čokoládová tyčinka s arašídy a karamelem", price: 25, icon: <ShoppingBag /> },
      { name: "Bageta šunka a sýr", description: "Balená bageta s šunkou, sýrem a zeleninou", price: 59, icon: <ShoppingBag /> },
      { name: "Red Bull Energy Drink 250ml", description: "Energetický nápoj pro povzbuzení a dobití energie", price: 45, icon: <ShoppingBag /> },
      { name: "Lay's Chipsy", description: "Křupavé bramborové chipsy v různých příchutích", price: 35, icon: <ShoppingBag /> },
    ],
  },
];

const categoryIcons = {
  "Káva": Coffee,
  "Graffiti potřeby": Droplet,
  "Občerstvení": ShoppingBag,
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(products[0].category);

  return (
    <main className="flex flex-col min-h-screen bg-sb-cream">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6 text-sb-brown">Naše nabídka</h1>

        {/* Záložky pro kategorie */}
        <div className="flex mb-6 border-b border-sb-brown">
          {products.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 font-semibold transition ${
                activeCategory === category.category
                  ? "bg-sb-orange text-sb-cream"
                  : "hover:bg-sb-orange hover:text-sb-cream"
              }`}
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Seznam produktů */}
        {products
          .filter((category) => category.category === activeCategory)
          .map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-sb-brown">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white shadow rounded-lg overflow-hidden flex">
                    <div className="w-1/3 bg-gray-200 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="w-2/3 p-4">
                      <h3 className="font-bold text-lg mb-2 text-sb-brown">{item.name}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <p className="text-xl font-bold text-sb-green">{item.price} Kč</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}