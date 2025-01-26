"use client"

import { AnimatePresence, motion } from "motion/react"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { routes } from "../../routes";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { useAnimation } from "motion/react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { useRouter } from "next/navigation";




export default function MenuBar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const router = useRouter();

    const path1Controles = useAnimation();
    const path2Controles = useAnimation();



    const path1Variants = {
        open: {
            d: "M3.06061 2.99999L21.0606 21",

        },
        closed: {
            d: "M0 8.5L24 8.5",
        }
    }

    const path2Variants = {
        open: {
            d: "M3.00006 21.0607L21.0001 3.06064",
        },
        closed: {
            d: "M0 15.5L24 15.5",
        }
    }

    useEffect(() => {
        if (menuOpen == true) {
            path1Controles.start(path1Variants.open);
            path2Controles.start(path2Variants.open);
        } else {
            path1Controles.start(path1Variants.closed);
            path2Controles.start(path2Variants.closed);

        }
    })

    return (
        <div className="menu-bar relative block ">

            <Button
                className="rounded-full bg-zinc-300 hover:bg-white  h-24 w-24 relative justify-self-center flex flex-col gap-2 cursor-pointer stroke-black stroke-2 z-50"
                onClick={() => setMenuOpen(!menuOpen)}>
                <svg width="40" height="40" viewBox="0 0 24 24" >
                    <motion.path {...path1Variants.closed} animate={path1Controles} transition={{ duration: 0.3 }} />
                    <motion.path {...path2Variants.closed} animate={path2Controles} transition={{ duration: 0.3 }} />

                </svg>
            </Button>
            <div className="">

                <AnimatePresence>
                    {
                        menuOpen && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, type: "spring" }}
                                exit={{ scale: 0, opacity: 0 }}

                                className="absolute cursor-pointer top-24 right-10 w-64 min-h-64 rounded-md bg-neutral-200 p-8 z-50 flex flex-col gap-4 origin-top-right">
                                {
                                    routes.map((route) => (

                                        <Link className="text-3xl font-mono uppercase font-bold hover:" href={route.href} key={route.href}>
                                            {route.label}
                                        </Link>

                                    ))
                                }
                                <InteractiveHoverButton onClick={() => {
                                    router.push('https://cal.com/mohit-thakur')
                                }}>Contact</InteractiveHoverButton>
                                <div className="flex gap-4">

                                    <Link href="https://x.com/MOHIT__002">
                                        <TwitterLogoIcon />

                                    </Link>
                                    <Link href="https://www.linkedin.com/in/mohit-thakur-648ab119b/">
                                        <LinkedInLogoIcon />

                                    </Link>
                                    <Link href="https://github.com/mohitthakur9901">
                                        <GitHubLogoIcon />
                                    </Link>

                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>


            </div>
        </div>
    )
}