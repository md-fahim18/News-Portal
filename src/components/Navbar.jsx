"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for menu toggle

export default function Navbar({ currentCategory, setCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "General", value: "general" },
    { name: "Tech", value: "technology" },
    { name: "Sports", value: "sports" },
    { name: "Business", value: "business" },
    { name: "Health", value: "health" },
    { name: "Entertainment", value: "entertainment" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600">News Portal</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          {categories.map((cat) => (
            <li key={cat.value}>
              <button
                className={`px-3 py-1 rounded hover:bg-blue-100 ${
                  currentCategory === cat.value
                    ? "bg-blue-200 font-semibold"
                    : ""
                }`}
                onClick={() => setCategory(cat.value)}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-start px-4 py-2 space-y-2">
            {categories.map((cat) => (
              <li key={cat.value} className="w-full">
                <button
                  className={`block w-full text-left px-3 py-2 rounded hover:bg-blue-100 ${
                    currentCategory === cat.value
                      ? "bg-blue-200 font-semibold"
                      : ""
                  }`}
                  onClick={() => {
                    setCategory(cat.value);
                    setIsOpen(false);
                  }}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
