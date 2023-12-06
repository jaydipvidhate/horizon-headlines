import Footer from "@/components/layout/footer/Footer";
import CategoriesSection from "@/components/pages/home/CategoriesSection";
import Hero from "@/components/pages/home/Hero";
import NewsSection from "@/components/pages/home/NewsSection";
import { getAllNews } from "@/lib/utilities/GetApi";
import Image from "next/image";

export default async function Home() {
  const news = await getAllNews();
  if (!news) {
    return;
  }

  // const heroNews = Math.floor(Math.random() * news.length);
  return (
    <>
      <Hero heroNews={news[0]} />
      <CategoriesSection />
      <NewsSection news={news} />
      <Footer />
    </>
  );
}
