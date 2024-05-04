import Image from "next/image"; 

export const FooterPic = () => {
    return (
        <div className="relative w-full h-full">
            <div className="w-full h-full flex flex-col items-center">
            <Image 
                src="/assets/degenator-logo.png"
                alt="image"
                height={720} 
                width={720}
                className="absolute hidden lg:block"
            />
        {/*mobile*/}
            <Image 
                src="/assets/degenator-logo.png"
                alt="image"
                height={900} 
                width={900}
                className="absolute lg:hidden"
            />

            <Image 
                src="/assets/footerpic.png"
                alt="image"
                fill
                object-fit="cover"
                className="hidden lg:block"
            />

        {/*mobile*/}
            <Image 
                src="/assets/footerpic-mobile.png"
                alt="image"
                fill
                object-fit="cover"
                className="lg:hidden"
            />
            </div> 
        </div> 
    ); 
}
