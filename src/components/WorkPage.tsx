"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import Safari from "./ui/safari";

export default function WorkPage() {
  const isMobile = useIsMobile();
  return (
    <div className={isMobile ? "w-full px-4" : "px-10"}>
      <h1
        className={`${
          isMobile ? "text-[4rem]" : "text-[10rem]"
        } font-semibold font-serif text-center`}
      >
        OUR VISION
      </h1>

      <div className="flex flex-col gap-y-5 items-center justify-center mb-5">
        <h1 className="font-semibold text-xl underline underline-offset-8">
          Idea to Reality
        </h1>

        <Safari
          className={`${
            isMobile ? "w-full max-w-xs h-auto" : "w-[10rem] h-[10rem]"
          }`}
          imageSrc="https://cdn.prod.website-files.com/6396257fec13a8df1b522d2f/65803ddd29f550aa3a985ca2_Paradigm-Home-Page-Section-Our-Works.webp"
        />

       
      </div>
    </div>
  );
}
