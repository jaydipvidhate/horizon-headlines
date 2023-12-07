"use client";

import Footer from "@/components/layout/footer/Footer";
import CategoriesSection from "@/components/pages/home/CategoriesSection";
import Hero from "@/components/pages/home/Hero";
import NewsSection from "@/components/pages/home/NewsSection";
import app from "@/lib/firebase";
import { getAllNews } from "@/lib/utilities/GetApi";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import { useState, useEffect } from "react";
const auth = getAuth(app);

export default function Home() {
  const [news, setNews] = useState([]);
  const [user, setUser] = useState("");
  const [page, setPage] = useState(1);
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
    fetchNews();
  }, []);

  useEffect(() => {
    fetchNews();
  }, [page]);

  if (!news) {
    return;
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      const newNews = await getAllNews(page, 5);

      if (newNews.length < 5) {
        setHasMore(false);
      }

      // Check for unique articles before updating the state
      setNews((prevNews) => {
        const uniqueArticles = newNews.filter(
          (article) =>
            !prevNews.some((prevArticle) => prevArticle.title === article.title)
        );
        return [...prevNews, ...uniqueArticles];
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Horizon Headlines</title>
        <meta
          name="description"
          content="Empowering you with timely news and insightful stories, our platform
            is your gateway to a world of knowledge and inspiration."
        />
      </Head>
      <Hero heroNews={news[2]} />
      <CategoriesSection />
      <NewsSection
        news={news}
        handleLoadMore={handleLoadMore}
        hasMore={hasMore}
        loading={loading}
      />
      <Footer />
    </>
  );
}
