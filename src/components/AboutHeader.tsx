"use client"

import Image from "next/image";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRouter } from "next/navigation";


export default function AboutHeader() {
    const isMobile = useIsMobile();
    const router = useRouter();


    return (
        <div className={`${isMobile ? "max-w-screen-sm" :""}`}>
            <div className="flex flex-col items-start justify-start ml-10 mt-10 cursor-pointer">
                <h1 className={`${isMobile ? "text-4xl mb-5 w-1/2" : "text-4xl mb-5 w-1/3"}`}>We&apos;re a tteam of Dev folks and tech greek passionate about the transformative power of technology</h1>
                <InteractiveHoverButton 
                onClick={() => {
                    router.push('https://cal.com/mohit-thakur')
                }}>
                    Meet Your Future Team
                </InteractiveHoverButton>
            </div>
            <div className="flex items-center justify-center mt-10 cursor-pointer mb-10">
                <Image src="/group2.avif" alt="AboutHeader" height={600} width={1600} className="rounded-lg" />
            </div>
        </div>
    );

};
