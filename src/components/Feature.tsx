"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Feature() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  const features = [
    {
      number: "01",
      title: "Scalable Web Application",
      image: "/group1.avif",
      link: "/",
    },
    {
      number: "02",
      title: "Robust Moblie App Development Services",
      image: "/group2.avif",
      link: "/",
    },
    {
      number: "03",
      title: "Next Level UI/UX Desgin",
      image: "/group3.avif",
      link: "/"
    },
  ];

  const handleMouseEnter = (image: string) => {
    setHoveredImage(image);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-right"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  return (
    <div className="relative border border-t-4">
      {/* Header Section */}
      {
        !isMobile ? (
          <div className="flex items-center justify-between p-5 border-black border-b-2">
            <p className="text-6xl font-semibold uppercase w-1/2">
              Transform Your Business with Cutting-Edge Tech Solutions
            </p>
            <Image src="/group1.avif" className="rounded-xl" alt="Feature" height={300} width={300} />
          </div>
        ) : (
          <div className="flex items-center justify-between p-5 border-black border-b-2">
            <p className="text-4xl font-semibold uppercase w-1/2">
              Transform Your Business with Cutting-Edge Tech Solutions
            </p>
            <Image src="/group1.avif" className="rounded-xl" alt="Feature" height={100} width={100} />
          </div>
        )
      }

      {/* Feature List */}
      <div>
        {features.map((feature, index) => (
          isMobile ? (
            <Link
              href={feature.link}
              key={index}
              className="flex items-center justify-between p-5 border-black border-b-2"
              onMouseEnter={() => handleMouseEnter(feature.image)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <div>
                <p className="text-2xl font-semibold uppercase">
                  {feature.number}
                </p>
                <p className="text-xl font-semibold uppercase">
                  {feature.title}
                </p>
              </div>
              <ArrowIcon />
            </Link>
          ) : (
              <div
                key={index}
                className="relative h-56  flex items-center justify-between px-10 py-6 border-black border-b-2 transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(feature.image)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <p className="text-7xl uppercase font-bold text-gray-800">{feature.number}</p>
                <p className="text-3xl uppercase text-gray-600">{feature.title}</p>
                <Link href={feature.link} className="text-7xl hover:bg-black hover:text-white hover:rounded-full hover:h-20 hover:w-20 flex items-center justify-center transition ease-in-out cursor-pointer">
                  <ArrowIcon />
                </Link>
              </div>
          
          )
        ))}
      </div>

      {/* Floating Image on Hover */}
      {hoveredImage && (
        <Image
          src={hoveredImage}
          alt="Feature Preview"
          height={isMobile ? 150 : 300}
          width={isMobile ? 150 : 300}
          className="absolute rounded-xl pointer-events-none transition-transform duration-200"
          // it should not move x-axis more than 
          style={{
            top: position.y - 10,
            left: position.x - 10,
          }}
        />
      )}
    </div>
  );
}
