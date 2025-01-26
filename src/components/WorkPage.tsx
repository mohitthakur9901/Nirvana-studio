"use client"


import { useIsMobile } from "@/hooks/use-mobile";
import Safari from "./ui/safari";

export default function WorkPage() {
    const isMobile = useIsMobile();
    return (
        <div>
            <h1 className={`${isMobile ? "text-[6rem] font-semibold font-serif " : "text-[10rem] font-semibold font-serif"}`}>OUR WORK</h1>

            <div className="flex flex-col gap-y-5 items-center justify-center mb-5">
                <h1 className="font-semibold text-xl underline underline-offset-8">Idea to Reality</h1>
                <Safari className={`${isMobile ? "h-[10rem] w-[10rem]" : ""}`} imageSrc="https://cdn.prod.website-files.com/6396257fec13a8df1b522d2f/65803ddd29f550aa3a985ca2_Paradigm-Home-Page-Section-Our-Works.webp" />
                <h1>

                </h1>
                <Safari className={`${isMobile ? "h-[10rem] w-[10rem]" : ""}`} imageSrc="https://cdn.prod.website-files.com/6396257fec13a8df1b522d2f/64e6028c1b4ae39f8d470352_Euphemia%20About%20Page%20Section%20Portfolio-p-1600.webp" />

            </div>
        </div>
    );

};
