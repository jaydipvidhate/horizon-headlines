import React from "react";
import { FaDotCircle } from "react-icons/fa";

const TrendingCard = ({ news, index }) => {
  if (!news) {
    return;
  }
  return (
    <div className="flex gap-10 items-start bg-black md:bg-transparent md:flex-auto flex-flexCategoryMd pt-20 relative p-4 md:p-0 rounded-2xl">
      <p className="text-4xl font-bold text-white md:text-black opacity-20 tracking-tighter absolute top-4 left-4 md:relative">
        #{index + 1}
      </p>
      <div className="flex flex-col gap-2">
        <h6 className="text-base font-semibold tracking-tight text-white md:text-black">
          "{news.title}"
        </h6>
        <div className="hidden gap-2 items-center opacity-50 md:flex">
          <p className="text-black text-sm">Read News</p>
          <FaDotCircle className="text-black/40 text-xs group-hover:scale-125 duration-200 ease-in-out" />
          <p className="text-black text-sm">5min read</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
