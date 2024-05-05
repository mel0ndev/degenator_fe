import Image from "next/image"; 

export const FooterLogo = () => {
    return (
        <div> 
            <div className="w-full h-full flex flex-col items-center">
               <Image 
                   src="/assets/degenator-logo.png"
                   alt="image"
                   height={500} 
                   width={720}
                   className="hidden lg:block"
               />

           {/*mobile*/}
               <Image 
                   src="/assets/degenator-logo-mobile.png"
                   alt="image"
                   height={300} 
                   width={450}
                   className="absolute lg:hidden"
               />
                <Image 
                   src="/assets/degenator-logo-arc-mobile.png"
                   alt="image"
                   height={300} 
                   width={600}
                   className="absolute lg:hidden"
                />
            </div>
        </div> 
    ); 
}
