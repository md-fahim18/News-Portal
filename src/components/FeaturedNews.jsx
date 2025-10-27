import React from "react";

export default function FeaturedNews({ article }) {
  if (!article) return null;

  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
      <h2 className="text-2xl font-bold mb-5 px-6 pt-6">Featured Story</h2>

      <div className="flex flex-col md:flex-row gap-6 ">
        {/* Left: Image */}
        <div className="md:w-1/2">
          {article.urlToImage ? (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="rounded-lg object-cover w-full h-72 md:h-full"
            />
          ) : (
            <div className="w-full h-72 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              No image available
            </div>
          )}
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 flex flex-col justify-center p-6">
          <div className="text-sm text-gray-500 mb-1">
            <span className="text-red-600 font-semibold">
              {article.source?.name || "Unknown Source"}
            </span>{" "}
            •{" "}
            {new Date(article.publishedAt).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-gray-900">
            {article.title}
          </h3>

          <p className="text-gray-700 mb-5 leading-relaxed">
            {article.description ||
              "No description available for this article."}
          </p>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors w-fit"
          >
            Read Full Story
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
    </section>
  );
}
