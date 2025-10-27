import React from "react";

export default function Navbar({ currentCategory, setCategory }) {
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
        <h1 className="text-2xl font-bold text-red-600">News Portal</h1>
        <ul className="flex gap-4">
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
      </div>
    </nav>
  );
}
