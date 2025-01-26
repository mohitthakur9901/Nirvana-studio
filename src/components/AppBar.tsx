"use client"

import Link from "next/link";
import { routes } from "../../routes";

import { useIsMobile } from "@/hooks/use-mobile";
import MenuBar from "./MenuBar";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { useRouter } from "next/navigation";


export default function AppBar() {

    const router = useRouter()

    const isMobile = useIsMobile();

    return (
        <div className={`flex items-center justify-between p-6 static cursor-pointer border-black border-b-2 ${isMobile ? "max-w-screen-sm" : ""}`}>

            {
                !isMobile ? (<Link href={'/'} className="text-4xl">
                    <h1 className="text-3xl font-sans font-semibold">House</h1>
                    <h3 className="text-2xl font-sans ml-10">OF</h3>
                    <h1 className="text-4xl font-sans font-semibold">NIRVANA</h1>

                </Link>
                ) : (

                    <Link href={'/'} className="text-lg">
                        <h1 className="text-lg font-sans font-semibold">House</h1>
                        <h3 className="text-md font-sans ml-10">OF</h3>
                        <h1 className="text-lg font-sans font-semibold">NIRVANA</h1>
                    </Link>
                )
            }

            {
                isMobile ? (<div className="flex items-center justify-between gap-10">

                    <MenuBar />

                </div>) : (
                    <div className="flex items-center justify-between gap-10">

                        {
                            routes.map((route) => {
                                return (
                                    <Link href={route.href} key={route.label}
                                        aria-label={`Navigate to ${route.label}`}
                                        className="hover:underline underline-offset-4 transition duration-200 ease-in-out text-gray-800 hover:text-gray-600"
                                    >
                                        {route.label}
                                    </Link>

                                )
                            })
                        }
                        <InteractiveHoverButton onClick={() => {
                            router.push('https://cal.com/mohit-thakur')
                        }}>Contact</InteractiveHoverButton>
                    </div>
                )
            }
        </div>
    )
}

// logo filp animation add