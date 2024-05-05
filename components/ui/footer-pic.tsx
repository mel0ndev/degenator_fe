import Image from "next/image"; 

export const FooterPic = () => {
    return (
        <div className="lg:absolute w-full lg:h-full lg:mb-16 lg:top-[5rem]">
            <div className="w-full h-1/2 flex flex-col items-center lg:mb-16">
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
                    height={250}
                    width={600}
                    className="lg:hidden"
                />
            </div> 
        </div> 
    ); 
}
