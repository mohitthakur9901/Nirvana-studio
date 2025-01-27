import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import HeroVideo from "@/components/HeroVideo";
import { ScrollBasedVelocity } from "@/components/scroll";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Nirvana Studio | Home ",
  description: "Software Development Agency",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroVideo />
      <ScrollBasedVelocity />
      <Feature />
    </div>
  );
}