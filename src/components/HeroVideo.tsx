"use client"

import HeroVideoDialog from "./ui/hero-video-dialog";



export default function HeroVideo() {
    return (
        <div className="flex items-center justify-center p-10 ">
            <HeroVideoDialog
                className="dark:hidden block h-1/2 w-1/2"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="/bg.jpg"
                thumbnailAlt="Hero Video"
            />
            
        </div>
    );


};
