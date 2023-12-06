import Link from "next/link";
import React from "react";

const CategoriesCard = ({ title, slug, backdrop }) => {
  return (
    <Link
      href={`/category/${slug}`}
      className="p-4 bg-black h-20 aspect-largeCard cursor-pointer hover:ring-4 ring-offset-2 ring-black duration-150 ease-in-out flex-flexCategoryLg flex items-center justify-center rounded-2xl"
    >
      <p className="text-base md:text-xl text-white font-light tracking-widest">
        {title}
      </p>
    </Link>
  );
};

export default CategoriesCard;
