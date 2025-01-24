"use client"

import Link from "next/link";
import { routes } from "../../routes";

import { useIsMobile } from "@/hooks/use-mobile";
import MenuBar from "./MenuBar";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";


export default function AppBar() {

    const isMobile = useIsMobile();
    
    return (
        <div className="flex items-center justify-between p-6 static cursor-pointer ">
            
            <Link href={'/'} className="text-4xl">
            Nirvana Studio
            </Link>

            {
                isMobile ? (<div className="flex items-center justify-between gap-10">
                    
                    <MenuBar/>
    
                </div>) : (
                    <div className="flex items-center justify-between gap-10">
                       
                       {
                        routes.map((route) => {
                            return (
                                <Link href={route.href} key={route.label}>
                                    {route.label}
                                    </Link>
                               
                            )
                        })
                    }
                        <InteractiveHoverButton onClick={() => (
                            alert('Contact me at XXXXXXXXXXXXXXXXXX')
                        )}>Contact</InteractiveHoverButton>
                    </div>
                )
            }
        </div>
    )
}

// logo filp animation add