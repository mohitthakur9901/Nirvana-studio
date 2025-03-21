
import StartupSection from "@/components/StartupSection";
import WorkPage from "@/components/WorkPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nirvana Studio | Work ",
    description: "Software Development Agency",
  };


export default function Work() {
    return (
        
       <div>
        <StartupSection/>
        <WorkPage/>
       </div>
    );
    
};
