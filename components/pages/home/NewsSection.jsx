"use client";
import SectionTitle from "@/components/atoms/section/SectionTitle";
import NewsCard from "@/components/cards/NewsCard";
import TrendingCard from "@/components/cards/TrendingCard";
import React, { useState } from "react";
import { CiGrid41, CiGrid2H } from "react-icons/ci";

const NewsSection = ({ news }) => {
  const [isCol, setIsCol] = useState(true);
  const toggleGrid = () => setIsCol(!isCol);
  return (
    <div className="max-w-lg mx-auto flex gap-10 md:gap-4 flex-col-reverse md:flex-row">
      <div className="w-full md:w-3/5 lg:w-2/3 flex  p-4 flex-col gap-2 md:gap-10 md:pr-10">
        <div className="flex justify-between items-start">
          <SectionTitle title="The Latest" />
          {isCol ? (
            <CiGrid2H
              onClick={toggleGrid}
              className="text-black text-xl cursor-pointer"
            />
          ) : (
            <CiGrid41
              onClick={toggleGrid}
              className="text-black text-xl cursor-pointer"
            />
          )}
        </div>
        <div
          className={`py-6 grid grid-flow-row  ${
            isCol ? "grid-cols-2 gap-4 md:gap-10" : "grid-cols-1 gap-10"
          }`}
        >
          {news?.length > 0 &&
            news.map((news, index) => (
              <NewsCard isCol={isCol} news={news} key={index} />
            ))}
        </div>
      </div>
      <div className="flex-1 h-screen flex  flex-col gap-2 md:gap-10">
        <div className="p-4">
          <SectionTitle title="On Trending" />
        </div>
        <div className="py-6 flex  p-4 flex-row md:flex-col items-stretch no-scrollbar gap-10 overflow-x-auto">
          {news?.length > 0 &&
            news
              .slice(0, 5)
              .map((news, index) => (
                <TrendingCard news={news} key={index} index={index} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
