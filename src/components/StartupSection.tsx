"use client";
import { useRouter } from "next/navigation";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function StartupSection() {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <div
    className={
      isMobile
        ? "max-w-screen-sm"
        : "flex flex-col items-center justify-between p-5 min-h-screen border-black border-b"
    }
  >
    <div className="flex flex-col text-center">
      <h1 className={isMobile ? "text-[2rem]" : "text-[7rem]"}>
        Launch Your Business{" "}
        <span className="underline underline-offset-8">Without Limits</span>{" "}
        But <span className="underline underline-offset-8">With Impact</span>
      </h1>
  
      <p className="text-xl font-semibold mt-4">
        From Idea to Execution – We Help You Build & Scale 🚀
      </p>
  
      <div className="flex flex-col items-center justify-center gap-y-5 mt-10">
        <h1 className="font-semibold">Your Vision, Our Expertise. Let’s Talk!</h1>
        <InteractiveHoverButton
          onClick={() => router.push("https://cal.com/mohit-thakur")}
        >
          <p>Book a Call</p>
        </InteractiveHoverButton>
      </div>
    </div>
  </div>
  
  );
}
