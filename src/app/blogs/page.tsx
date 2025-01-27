import BlogPage from "@/components/BlogPage";
import { Metadata } from "next";




export const metadata: Metadata = {
    title: "Nirvana Studio | Blog ",
    description: "Software Development Agency",
  };

  
export default function Blogs() {
    return (
        <BlogPage/>
    );
    
};
