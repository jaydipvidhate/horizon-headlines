import BorderdBtn from "@/components/atoms/btn/BorderdBtn";
import { textToSlug } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaDotCircle } from "react-icons/fa";

const Hero = ({ heroNews }) => {
  return (
    <div className="w-full aspect-video md:aspect-largeCard md:bg-black/70 relative overflow-hidden">
      {heroNews?.urlToImage ? (
        <Image
          src={heroNews.urlToImage}
          alt="news Banner"
          loading="eager"
          priority={true}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-black absolute top-0 left-0"></div>
      )}
      <div className="w-full h-full bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent relative">
        <div className="max-w-lg mx-auto relative h-full w-full px-4 flex justify-end md:justify-center items-start gap-y-4 md:gap-y-8 flex-col">
          <p className="border-white/40 md:flex hidden border border-solid text-white/60 bg-white/10 px-4 py-1 rounded-full">
            Top Headings
          </p>
          {heroNews?.title ? (
            <h2 className="text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl tracking-normal font-semibold">
              {heroNews?.title}
            </h2>
          ) : (
            <div className="w-full">
              <h2 className="p-3 md:p-4 bg-white/20 w-full mb-3 rounded-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"></h2>
              <h2 className="p-3 md:p-4 bg-white/20 w-1/3 mb-3 rounded-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"></h2>
            </div>
          )}
          <div className="items-center gap-4 flex mb-6 md:mb-0 opacity-60">
            {heroNews?.title && (
              <Link
                href={textToSlug(heroNews?.title)}
                className="p-4 md:flex hidden rounded-full bg-white/20 group cursor-pointer hover:bg-white/30"
              >
                <FaAngleRight className="text-white text-base group-hover:scale-125 duration-200 ease-in-out" />
              </Link>
            )}
            <p className="text-white text-sm">Read News</p>
            <FaDotCircle className="text-white/40 text-base group-hover:scale-125 duration-200 ease-in-out" />
            <p className="text-white text-sm">5min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
