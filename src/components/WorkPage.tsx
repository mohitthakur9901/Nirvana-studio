import Safari from "./ui/safari";

export default function WorkPage() {
    return (
        <div>
            <h1 className="text-[10rem] font-semibold font-mono">OUR WORK</h1>
        
        <div className="flex flex-col gap-y-5 items-center justify-center mb-5 border-black border-t">
        <Safari className="mt-5" imageSrc="https://cdn.prod.website-files.com/6396257fec13a8df1b522d2f/65803ddd29f550aa3a985ca2_Paradigm-Home-Page-Section-Our-Works.webp" />
        <Safari className="mt-5" imageSrc="https://cdn.prod.website-files.com/6396257fec13a8df1b522d2f/64e6028c1b4ae39f8d470352_Euphemia%20About%20Page%20Section%20Portfolio-p-1600.webp" />

        </div>
        </div>
    );
    
};
