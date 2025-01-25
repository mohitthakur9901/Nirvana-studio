import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import HeroVideo from "@/components/HeroVideo";
import { ScrollBasedVelocity } from "@/components/scroll";

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