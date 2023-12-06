"use client";

import GenericHero from "@/components/pages/GenericHero";
import NewsSection from "@/components/pages/home/NewsSection";
import app from "@/lib/firebase";
import { getAllNews, getNewsByCategories } from "@/lib/utilities/GetApi";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const auth = getAuth(app);

const page = ({ params }) => {
  const [news, setNews] = useState([]);
  const [user, setUser] = useState("");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const newNews = await getNewsByCategories(page, 5, params.name);

        if (newNews.length < 5) {
          setHasMore(false);
        }

        // Check for unique articles before updating the state
        setNews((prevNews) => {
          const uniqueArticles = newNews.filter(
            (article) =>
              !prevNews.some(
                (prevArticle) => prevArticle.title === article.title
              )
          );
          return [...prevNews, ...uniqueArticles];
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [page]);

  if (!news) {
    return;
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <GenericHero title={params.name} />
      <NewsSection
        news={news}
        handleLoadMore={handleLoadMore}
        hasMore={hasMore}
        loading={loading}
      />
    </div>
  );
};

export default page;
