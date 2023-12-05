import SectionTitle from "@/components/atoms/section/SectionTitle";
import CategoriesCard from "@/components/cards/CategoriesCard";
import React from "react";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Business",
      slug: "business",
    },
    {
      title: "Entertainment",
      slug: "entertainment",
    },
    {
      title: "Health",
      slug: "health",
    },
    {
      title: "Science",
      slug: "science",
    },
    {
      title: "Sports",
      slug: "sports",
    },
    {
      title: "Technology",
      slug: "technology",
    },
  ];
  return (
    <div className="max-w-lg mx-auto  flex md:gap-4 flex-col">
      <div className="p-4">
        <SectionTitle title="Categories" />
      </div>
      <div className="p-4 flex gap-x-4 md:gap-x-6 overflow-x-auto md:px-10 no-scrollbar">
        {categories?.length > 0 &&
          categories.map((category, index) => (
            <CategoriesCard
              title={category.title}
              slug={category.slug}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
