import React from "react";

export default function NewsCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="font-bold text-lg mb-2">{article.title}</h2>
        <p className="text-sm text-gray-600 flex-1">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 font-bold inline-block text-red-600 hover:underline"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
