"use client" 
import Image from "next/image"; 
import { BasicTier } from "@/components/ui/basic-tier"; 
import { LegendaryDegenator } from "@/components/ui/legendary"; 
import { useState, useEffect } from "react"; 

const Tiers = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 650); 
	const updateMedia = () => {
		setDesktop(window.innerWidth > 650);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

    const tiers = [
        {name: "Pleb", stakingBonusPeriod: "Flexible", unstakingPeriod: "4 hours", apy: "10", bonus: "0", bonusColor: "#989898", badgeSource: "/assets/pleb.png"},
        {name: "Rookie", stakingBonusPeriod: "1 Day", unstakingPeriod: "12 hours", apy: "20", bonus: "0.1", bonusColor: "#C3C3C3", badgeSource: "/assets/rookie.png"},
        {name: "Chad", stakingBonusPeriod: "3 Days", unstakingPeriod: "24 hours", apy: "30", bonus: "9", bonusColor: "#D8A971", badgeSource: "/assets/chad.png"},
        {name: "Patron", stakingBonusPeriod: "7 Days", unstakingPeriod: "36 hours", apy: "70", bonus: "42", bonusColor: "#F4C4F3", badgeSource: "/assets/patron.png"},
        {name: "Degenator", stakingBonusPeriod: "14 Days", unstakingPeriod: "48 hours", apy: "140", bonus: "168", bonusColor: "#8FDBFF", badgeSource: "/assets/degenator.png"}
    ]

    return (
        <div className="grid grid-cols-10 grid-row-5 pt-14 mt-10 gap-y-8 p-10"> 
            <div className="font-bukabird col-span-10 lg:col-span-10 flex items-center text-center justify-center text-5xl lg:text-5xl"> 
                Higher tier, bigger rewards
            </div>

            <div className="font-poppins col-span-10 lg:col-span-10 flex items-center justify-center text-lg"> 
                <span className="text-gray-400"> 
                    Total Supply Staked: &nbsp; 
                </span> 
                [amount]
            </div>
           
        {/*render mobile here*/}
            {isDesktop ? (
                <div className="col-span-8 col-start-2 flex flex-col items-center">
                <div> 
                    <div className="grid grid-cols-5 gap-x-5"> 
                        {tiers.map((t) => (
                            <>
                                <BasicTier name={t.name} stakingPeriod={t.stakingBonusPeriod} apy={t.apy} bonus={t.bonus} unstakingPeriod={t.unstakingPeriod} bonusColor={t.bonusColor} badgeSource={t.badgeSource} /> 
                            </>
                        ))} 
                    </div> 
                    <div className="flex flex-col items-center font-poppins col-span-10"> 
                        *Staked funds + rewards will automatically restaked after completetion with zero gas fees attached
                    </div> 
                </div> 

                <div className="col-span-4 row-span-2 col-start-4 w-full h-full items-center mb-16 relative flex flex-col top-[-15%]"> 
                    <div className="flex flex-col items-center relative"> 
                        <Image 
                            src="/assets/legendary.png"
                            alt="badge"
                            width={275}
                            height={275}
                            className="relative bottom-[-10.5rem]"
                        />
                    </div> 
                    <LegendaryDegenator 
                        name="Legendary Degenator" 
                        stakingPeriod="30 Days" 
                        apy="300" 
                        bonus="900" 
                        unstakingPeriod="48 hours" 
                        bonusColor="#8FDBFF" 
                    /> 
                </div> 
            </div> 
            ) : ( 
                <div> hi </div> 
            )}

        </div>
    ); 
}

export default Tiers; 
