import BorderdBtn from "@/components/atoms/btn/BorderdBtn";
import SolidBtn from "@/components/atoms/btn/SolidBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="flex md:gap-4 flex-col relative">
        <div className="w-full h-full absolute top-0 left-0">
          <Image
            src={
              "https://res.cloudinary.com/dllqtyi1j/image/upload/v1701836122/horizon-headlines/FooterBG_ulz9mk.webp"
            }
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
            fill
            priority={false}
            alt="Footer Banner Bg"
            className="object-cover brightness-[0.3]"
          />
        </div>
        <div className="max-w-lg mx-auto p-4 relative flex items-center justify-center py-40 flex-col gap-6">
          <h4 className="text-3xl md:text-5xl tracking-wider font-bold text-white text-center">
            Empowering Minds with Knowledge
          </h4>
          <p className="text-sm md:text-base text-white max-w-3xl text-center">
            Empowering you with timely news and insightful stories, our platform
            is your gateway to a world of knowledge and inspiration.
          </p>
          <BorderdBtn light title="Join Now" />
        </div>
      </div>
      <div className="max-w-lg mx-auto p-4 flex flex-col items-center justify-center gap-6 py-32">
        <Link href="/" className="w-24 md:w-40 aspect-square relative">
          <Image
            src={
              "https://res.cloudinary.com/dllqtyi1j/image/upload/v1701783317/horizon-headlines/HHIcon_nqnipb.svg"
            }
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
            priority={true}
            alt="Horizon Headlines Logo"
            className="object-fill"
          />
        </Link>
        <h4 className="text-white text-sm md:text-base font-light max-w-xl text-center opacity-25 tracking-widest">
          Empower, Inspire, Explore: Your Daily Source for Insightful Stories
          and Tomorrow's Ideas.
        </h4>
        <p className="text-white text-xs md:text-sm font-light max-w-xl text-center opacity-25 tracking-tight">
          @2023 all copyrights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
