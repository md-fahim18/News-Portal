export default async function handler(req, res) {
  const { category = "general" } = req.query;
  const API_KEY =
    process.env.NEWS_API_KEY || "85a5bd029a4f410c8f62b22f7f15cb16";

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=10&apiKey=${API_KEY}`
  );

  const data = await response.json();
  res.status(200).json(data);
}
