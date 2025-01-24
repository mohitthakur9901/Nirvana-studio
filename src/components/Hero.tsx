"use client"

import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "motion/react";
import Image from "next/image"


export default function Hero() {


    const isMobile = useIsMobile();

    return (
        <div className="pb-5 ">
            {
                !isMobile ? (<div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
                    <h1 className="text-6xl font-bold uppercase overflow-hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium tempore modi temporibus molestiae sed,
                        aperiam. Culpa, mollitia.
                    </h1><p className="font-semibold text-3xl pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, omnis.
                    </p>
                </div>) : (
                    <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
                    <h1 className="text-xl font-bold uppercase overflow-hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium tempore modi temporibus molestiae sed,
                        aperiam. Culpa, mollitia.
                    </h1><p className="font-semibold text-lg pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, omnis.
                    </p>
                </div>
                )
            }

            {
                isMobile ? (<div className="">
                    <motion.div
                        whileTap="tap"
                        whileHover={
                            {
                                scale: 1.0,
                                rotate: -10
                            }
                        }

                        className="flex items-center justify-start ml-10">
                        <Image src='/group1.avif' alt="1" height={100} width={100} className="rounded-md" />
                    </motion.div>
                 
                    <motion.div
                        whileTap="tap"
                        whileHover={
                            {
                                scale: 1.0,
                                rotate: 10
                            }
                        }
                        className="flex items-center justify-start ml-5  mt-32">
                        <Image src='/group3.avif' alt="1" height={150} width={150} className="rounded-md" />
                    </motion.div>
                </div>
                ) : (

                    <div className="">
                        <motion.div
                            whileTap="tap"
                            whileHover={
                                {
                                    scale: 1.0,
                                    rotate: -10
                                }
                            }

                            className="flex items-center justify-start ml-24">
                            <Image src='/group1.avif' alt="1" height={200} width={200} className="rounded-md" />
                        </motion.div>
                        <motion.div
                            whileTap="tap"
                            whileHover={
                                {
                                    scale: 1.0,
                                    rotate: -10
                                }
                            }
                            className="flex items-center justify-end mr-10">
                            <Image src='/group2.avif' alt="1" height={400} width={400} className="rounded-md" />
                        </motion.div>
                        <motion.div
                            whileTap="tap"
                            whileHover={
                                {
                                    scale: 1.0,
                                    rotate: 10
                                }
                            }
                            className="flex items-center justify-start ml-5">
                            <Image src='/group3.avif' alt="1" height={300} width={300} className="rounded-md" />
                        </motion.div>
                    </div>
                )
            }
        </div>
    )

};
