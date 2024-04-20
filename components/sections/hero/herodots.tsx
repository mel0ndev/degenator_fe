import Image from "next/image";

export const HeroDots = () => {
    return (
        <div className="h-[850px]">
            <Image 
                src="/assets/herodots.png"
                fill
                object-fit="cover"
                alt="dots"
            />
        </div> 
    ); 
}


