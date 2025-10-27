import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import FeaturedNews from "./components/FeaturedNews";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";

const API_KEY = "85a5bd029a4f410c8f62b22f7f15cb16"; // Replace with your NewsAPI key

export default function App() {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=10&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1);

  return (
    <div>
      <Navbar currentCategory={category} setCategory={setCategory} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center text-xl">Loading news...</p>
        ) : (
          <>
            <FeaturedNews article={featuredArticle} />

            {latestArticles.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-4">Latest News</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {latestArticles.map((article, idx) => (
                    <NewsCard key={idx} article={article} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
