"use client"

import { useIsMobile } from "@/hooks/use-mobile";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { useRouter } from "next/navigation";

export default function Footer() {

  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <footer className="flex flex-col  text-gray-800  border-black border-t p-10">
      {/* Contact & Services Section */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-10">
        {/* Contact Info */}
        <div className="w-full md:w-1/3  pb-5">
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-lg">
            123 Main Street, City, Country
            <br />
            Phone: +00 0000 0000 000
            <br />
            Email: info@example.com
          </p>
        </div>

        {/* CTA Section */}
        <div className="w-full md:w-1/3 pb-5 text-center">
          <h2 className="text-2xl font-semibold mb-5">
            Use <span className="underline underline-offset-8" >Our Imagination</span> to <span className="underline underline-offset-8" >Accelerate Your Brand</span>, Product, or Technology
          </h2>
          <InteractiveHoverButton onClick={() => {
            router.push('https://cal.com/mohit-thakur')
          }} className="text-lg px-6 py-3 font-semibold">
            Let&apos;s Accelerate 🚀
          </InteractiveHoverButton>
        </div>
      </div>

      {/* Branding Section */}
      {
        isMobile ? (
          <><h1 className="text-6xl md:text-8xl lg:text-[10rem] flex items-center justify-center font-bold border-black border-t-2 pt-10 tracking-tight">
            HOUSE OF NIRVANA

          </h1><p className="font-semibold">By Nirvan Studio</p></>
        ) : (
          <><h1 className="text-6xl md:text-8xl lg:text-[10rem] flex items-center justify-center font-bold border-black border-t-2 pt-10 tracking-tight">
              HOUSE OF NIRVANA

            </h1>
            <p className="text-xl flex items-center justify-center font-semibold">By Nirvan Studio</p>
            </>
        )

      }
    </footer>
  );
}
