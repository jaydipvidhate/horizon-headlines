import Hero from "@/components/pages/home/Hero";
import { getAllNews } from "@/lib/utilities/GetApi";
import Image from "next/image";

export default async function Home() {
  const news = await getAllNews();
  if (!news) {
    return;
  }

  // const heroNews = Math.floor(Math.random() * news.length);
  return <Hero heroNews={news[0]} />;
}
