"use client"

import HeroVideoDialog from "./ui/hero-video-dialog";



export default function HeroVideo() {
    return (
        <div className="flex items-center justify-center p-10">
            <HeroVideoDialog
                className="dark:hidden block h-1/2 w-1/2"
                videoSrc="herovideo.mp4"
                thumbnailSrc="/thumnail.jpg"
                thumbnailAlt="Hero Video"
            />
            
        </div>
    );


};
