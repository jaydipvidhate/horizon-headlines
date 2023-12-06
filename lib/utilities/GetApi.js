export const getAllNews = async (page = 1, pageSize = 5) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&page=${page}&pageSize=${pageSize}&apiKey=a0d8e240fd904700823ab683f0b84c45`
    );

    if (!response.ok) {
      console.log(`No news found `);
      return [];
    }

    const news = await response.json();

    return news.articles;
  } catch (error) {
    // Handle timeout errors
    if (error.message.includes("fetch failed")) {
      console.error("Connection timeout. Server may be unreachable.");
      // You can return a custom error or throw an error here
      return []; // or throw new Error("Server not reachable");
    }
    console.error("Error fetching news:", error);
    throw notFound();
  }
};
export const getNewsByCategories = async (page = 0, pageSize = 5, category) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=in&page=${page}&pageSize=${pageSize}&apiKey=a0d8e240fd904700823ab683f0b84c45`
    );

    if (!response.ok) {
      console.log(`No news found `);
      return [];
    }

    const news = await response.json();

    return news.articles;
  } catch (error) {
    // Handle timeout errors
    if (error.message.includes("fetch failed")) {
      console.error("Connection timeout. Server may be unreachable.");
      // You can return a custom error or throw an error here
      return []; // or throw new Error("Server not reachable");
    }
    console.error("Error fetching news:", error);
    throw notFound();
  }
};
