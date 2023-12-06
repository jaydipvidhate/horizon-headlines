import { textToSlug } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDotCircle } from "react-icons/fa";

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

  return (
    <Link
      href={textToSlug(news.title)}
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
      <div className="flex-1 flex flex-col gap-2 justify-between items-start">
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
    </Link>
  );
};

export default NewsCard;
