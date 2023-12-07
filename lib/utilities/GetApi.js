export const getAllNews = async (page = 1, pageSize = 5) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&page=${page}&pageSize=${pageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );

    if (!response.ok) {
      console.log(`No news found `);
      return [];
    }

    const news = await response.json();

    return news.articles;
  } catch (error) {
    if (error.message.includes("fetch failed")) {
      console.error("Connection timeout. Server may be unreachable.");
      return [];
    }
    console.error("Error fetching news:", error);
    throw notFound();
  }
};
export const getNewsByCategories = async (page = 0, pageSize = 5, category) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=in&page=${page}&pageSize=${pageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );

    if (!response.ok) {
      console.log(`No news found `);
      return [];
    }

    const news = await response.json();

    return news.articles;
  } catch (error) {
    if (error.message.includes("fetch failed")) {
      console.error("Connection timeout. Server may be unreachable.");
      return [];
    }
    console.error("Error fetching news:", error);
    throw notFound();
  }
};
