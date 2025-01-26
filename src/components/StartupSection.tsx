"use client"
import { useRouter } from "next/navigation";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function StartupSection() {

    const isMobile = useIsMobile();
    const router = useRouter();


    return (
        <div className="flex flex-col items-center justify-between p-5 h-screen border-black border-b">

            <div className="flex flex-col">
                <h1 className={`${isMobile ? "text-[4rem]" : "text-[7rem] "}`}>Launch Your Business <span className="underline underline-offset-8">Not in Months</span> But <span  className="underline underline-offset-8" >In Weeks</span></h1>

                <p className="text-xl font-semibold">
                    We Help You Launch 🚀 Your Startup 💡 In 3 Weeks , Not In 3 Months  
                </p>

               <div className={`${isMobile ? "flex flex-col items-center justify-center gap-y-5" : "flex flex-col items-center justify-center gap-y-5 "}`}>
               <h1 className="font-semibold mt-10">Schedule a Meeting Right Away</h1>
                <InteractiveHoverButton
                    
                    onClick={() => {
                        router.push('https://cal.com/mohit-thakur')
                    }}
                >
                    <p>Book a Call</p>
                </InteractiveHoverButton>
               </div>
            </div>



        </div>
    );

};
