import Image from "next/image"; 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface IHowToCard {
    titleColor: string; 
    title: string; 
    description: string; 
    leftAligned: boolean;
    imageSrc: string; 
    uniswap?: boolean; 
}

export const HowToCard = ({titleColor, title, description, leftAligned, imageSrc, uniswap}: IHowToCard) => {

    return (
        <Card className="bg-gradient-to-tr from-[#11101D] to-zinc-700 w-full h-full lg:p-10 p-3 sm:p-3 lg:p-5">
            <CardHeader className={`text-[${titleColor}] text-white p-2`}>
                {leftAligned ? (
                    <CardTitle className="font-poppins text-4xl lg:text-left lg:align-start">{title}</CardTitle>
                ) : (
                    <CardTitle className="font-poppins text-4xl lg:text-right lg:align-end">{title}</CardTitle>
                )}
            </CardHeader>
                {leftAligned ? (
                    <CardContent className="lg:text-left text-white lg:align-start relative flex grid grid-cols-5 items-center h-10">
                        <p className="col-span-5 lg:col-span-4 flex">{description}</p>
                        <div className="invisible xl:visible relative flex col-span-5 lg:justify-end lg:top-[-75%]">
                            <Image 
                                src={imageSrc}
                                alt="image"
                                height={185}
                                width={185}
                                className="relative"
                            /> 
                {uniswap && (
                            <Image 
                                src="/assets/uniswaplogo.svg"
                                alt="image"
                                height={50}
                                width={50}
                                className="absolute bottom-0 right-0 transform -translate-x-16 -translate-y-16"
                            /> 
                )}
                        </div>
                    </CardContent>
                ) : (
                    <CardContent className="lg:text-right text-white lg:align-end relative flex grid grid-cols-5 h-24">
                        <p className="col-span-5 lg:col-span-4 lg:col-start-2 flex">{description}</p>
                        <div className="invisible xl:visible relative col-span-2 top-[-75%]">
                            <Image 
                                src={imageSrc}
                                alt="image"
                                height={150}
                                width={150}
                                className="relative"
                            /> 
                            
                        </div> 
                    </CardContent>
                )}
        </Card>
    ); 
}
