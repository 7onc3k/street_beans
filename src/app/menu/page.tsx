'use client'

import { useState } from "react";
import { Coffee, Droplet, ShoppingBag } from "react-feather";
import React from "react";
import Image from "next/image";

const products = [
  {
    category: "Káva",
    items: [
      { name: "Espresso Illy", description: "Klasika z kvalitních zrn", price: 45 },
      { name: "Cappuccino", description: "Krémová mléčná pěna", price: 55 },
    ],
  },
  {
    category: "Graffiti potřeby",
    items: [
      { name: "Montana BLACK 400ml", description: "Vysoce krycí sprej", price: 159 },
      { name: "Molotow ONE4ALL Marker", description: "Akrylový popisovač", price: 119 },
    ],
  },
  {
    category: "Občerstvení",
    items: [
      { name: "Bageta šunka a sýr", description: "Čerstvá a chutná", price: 59 },
      { name: "Veganský wrap", description: "Plný zeleniny", price: 69 },
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
                    <div className="w-1/3 bg-gray-200 relative aspect-square">
                      <Image
                        src={`https://picsum.photos/400/400?random=${categoryIndex}${itemIndex}`}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
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