"use client";

import Footer from "@/components/layout/footer/Footer";
import GenericHero from "@/components/pages/GenericHero";
import CategoriesSection from "@/components/pages/home/CategoriesSection";
import NewsSection from "@/components/pages/home/NewsSection";
import app from "@/lib/firebase";
import { getAllNews, getNewsByCategories } from "@/lib/utilities/GetApi";
import { getAllFavoriteNews } from "@/lib/utilities/firebaseApi";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const auth = getAuth(app);

const page = () => {
  const [news, setNews] = useState(null);
  const [user, setUser] = useState("");
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
    if (user) {
      setLoading(true);
      getAllFavoriteNews(user.uid)
        .then((favoriteNews) => {
          setNews(favoriteNews);
          // Handle the retrieved favorite news data here
        })
        .catch((error) => {
          // Handle error if fetching favorite news fails
          console.error("Error:", error);
        });
      setLoading(false);
    }
  }, [user]);

  return (
    <div>
      <GenericHero title="My Favourites" />
      {!loading ? (
        news ? (
          <NewsSection news={news} title={"All Favourites"} />
        ) : (
          <div className="w-full h-full flex items-center justify-center py-20">
            <h4 className="text-2xl font-medium tracking-wider">
              No Favorites Found!
            </h4>
          </div>
        )
      ) : (
        <div className="w-full h-full flex items-center justify-center py-20">
          <h4 className="text-2xl font-medium tracking-wider">Loading</h4>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default page;
