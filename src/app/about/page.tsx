import AboutHeader from "@/components/AboutHeader";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Nirvana Studio | About ",
    description: "Software Development Agency",
  };
  
export default function About() {
    return (
        <AboutHeader/>
    );
    
};
