"use client";
import { textToSlug } from "@/lib/constants";
import app, { db } from "@/lib/firebase";
import { addToFav, removeFromFav } from "@/lib/utilities/firebaseApi";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const auth = getAuth(app);

const NewsCard = ({ news, isCol }) => {
  if (!news?.urlToImage) return;

  let originalDate = new Date(news.publishedAt);

  let options = { day: "numeric", month: "short", year: "numeric" };

  let formattedDate = originalDate.toLocaleDateString("en-US", options);

  let currentDate = new Date();

  let timeDifference = currentDate - originalDate;

  let minutesDiff = Math.floor(timeDifference / (1000 * 60));
  let hoursDiff = Math.floor(timeDifference / (1000 * 60 * 60));

  let relativeTime;

  if (minutesDiff < 60) {
    relativeTime = `${minutesDiff} ${
      minutesDiff === 1 ? "minute" : "minutes"
    } ago`;
  } else {
    relativeTime = `${hoursDiff} ${hoursDiff === 1 ? "hour" : "hours"} ago`;
  }

  const [isFav, setIsFav] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      const user = getAuth().currentUser;

      if (user) {
        const favoritesRef = collection(db, `users/${user.uid}/favorites`);
        const q = query(favoritesRef, where("title", "==", news.title));
        const querySnapshot = await getDocs(q);

        setIsFav(!querySnapshot.empty);
        setLoading(false); // Set loading to false once the check is complete
      }
    };

    checkFavoriteStatus();
  }, [news?.title, auth?.currentUser?.uid]);

  const handleAddToFavorite = async () => {
    setLoading(true);
    try {
      const user = auth.currentUser;

      if (user) {
        const favoritesRef = collection(db, `users/${user.uid}/favorites`);
        const q = query(favoritesRef, where("title", "==", news.title));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size > 0) {
          // The news article is already a favorite, so remove it from favorites
          await removeFromFav(user.uid, news);
          setIsFav(false);
        } else {
          // The news article is not a favorite, so add it to favorites
          await addToFav(user.uid, news);
          setIsFav(true);
        }
      }
    } catch (error) {
      console.error("Error adding/removing from favorites:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      // href={textToSlug(news.title)}
      className="flex gap-4 cursor-pointer group items-start flex-col md:flex-row"
    >
      <div
        className={`w-full md:w-32 ${
          isCol ? "aspect-square" : "aspect-largeCard"
        } md:aspect-square rounded-lg bg-black/20 relative overflow-hidden`}
      >
        {news?.urlToImage && (
          <Image
            src={news?.urlToImage}
            fill
            className="object-cover group-hover:scale-110 duration-300 ease-in-out"
          />
        )}
      </div>
      <div className="flex-1 flex flex-col gap-2 justify-between items-start relative pr-6">
        {auth.currentUser ? (
          loading ? (
            <AiOutlineLoading3Quarters className="text-black text-lg absolute top-0 right-0 animate-spin" />
          ) : isFav ? (
            <RxHeartFilled
              onClick={() => (!loading ? handleAddToFavorite() : "")}
              className="text-black text-xl absolute top-0 right-0"
            />
          ) : (
            <RxHeart
              onClick={() => (!loading ? handleAddToFavorite() : "")}
              className="text-black text-xl absolute top-0 right-0"
            />
          )
        ) : null}
        <div>
          <h4 className="text-base font-semibold leading-tight">
            {news.title}
          </h4>
          {!isCol && (
            <p className="text-sm font-light tracking-tight">
              {news.description ? news.description : news.content}
            </p>
          )}
        </div>
        <div
          className={`flex gap-2 items-center opacity-40 ${
            isCol ? "flex-col" : "flex-row"
          }`}
        >
          <p className="text-black text-sm">{formattedDate}</p>
          {!isCol && <FaDotCircle className="text-black/40 text-xs" />}
          {!isCol && <p className="text-black text-sm">{relativeTime}</p>}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
