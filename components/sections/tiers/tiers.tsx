import Image from "next/image"; 
import { TotalSupplyStaked } from "@/components/ui/total-staked"; 
import { BasicTier } from "@/components/ui/basic-tier"; 
import { LegendaryDegenator } from "@/components/ui/legendary"; 


const Tiers = () => {

    const tiers = [
        {name: "Pleb", stakingBonusPeriod: "Flexible", unstakingPeriod: "4 hours", apy: "10", bonus: "0", bonusColor: "#989898", badgeSource: "/assets/pleb.png"},
        {name: "Rookie", stakingBonusPeriod: "1 Day", unstakingPeriod: "12 hours", apy: "20", bonus: "0.1", bonusColor: "#C3C3C3", badgeSource: "/assets/rookie.png"},
        {name: "Chad", stakingBonusPeriod: "3 Days", unstakingPeriod: "24 hours", apy: "30", bonus: "9", bonusColor: "#D8A971", badgeSource: "/assets/chad.png"},
        {name: "Patron", stakingBonusPeriod: "7 Days", unstakingPeriod: "36 hours", apy: "70", bonus: "42", bonusColor: "#F4C4F3", badgeSource: "/assets/patron.png"},
        {name: "Degenator", stakingBonusPeriod: "14 Days", unstakingPeriod: "48 hours", apy: "140", bonus: "168", bonusColor: "#8FDBFF", badgeSource: "/assets/degenator.png"}
    ]

    return (
        <div className="bg-[url('/assets/tiers-arc-left.png')] bg-no-repeat">
            <div className="bg-[url('/assets/tiers-arc-right.png')] bg-no-repeat bg-right">
        <div className="grid grid-cols-10 grid-row-5 pt-14 mt-10 gap-y-8 p-10 pb-0 h-full"> 
            <div className="font-bukabird text-white col-span-10 lg:col-span-10 flex items-center text-center justify-center text-5xl lg:text-5xl"> 
                Higher tier, bigger rewards
            </div>

            <TotalSupplyStaked />

            <div className="hidden lg:block lg:col-span-8 lg:col-start-2 flex flex-col items-center">
                    <div className="grid grid-cols-5 gap-x-5"> 
                        {tiers.map((t, i) => (
                            <div key={t.name}>
                                <BasicTier name={t.name} stakingPeriod={t.stakingBonusPeriod} apy={t.apy} bonus={t.bonus} unstakingPeriod={t.unstakingPeriod} bonusColor={t.bonusColor} badgeSource={t.badgeSource} index={i}/> 
                            </div>
                        ))} 
                    </div> 
                    <div className="flex flex-col items-center font-poppins col-span-10"> 
                        *Staked funds + rewards will be automatically restaked after completion with zero gas fees attached
                    </div> 
                </div> 
            </div>

                <div className="hidden lg:flex col-span-10 w-full bg-[url('/assets/legendary-lines-left.png')] bg-no-repeat p-0 flex flex-col items-center">
                <div className="hidden lg:flex col-span-10 w-full bg-[url('/assets/legendary-lines-right.png')] bg-no-repeat bg-right p-0 flex flex-col items-center">
                <div className="hidden lg:block w-1/2 h-3/4 flex flex-col items-center justify-center mb-16 relative top-[-15%]" id="legendary"> 
                    <div className="flex flex-col items-center relative"> 
                        <Image 
                            src="/assets/legendary.png"
                            alt="badge"
                            width={275}
                            height={275}
                            className="relative bottom-[-6.5rem]"
                        />
                    </div> 
                    <LegendaryDegenator 
                        name="Legendary Degenator" 
                        stakingPeriod="30 Days" 
                        bonus="900" 
                        unstakingPeriod="48 hours" 
                        bonusColor="#8FDBFF" 
                    /> 
                </div>
            </div>
            </div>

            <div className="lg:hidden col-span-10 w-full items-center flex flex-col grid grid-rows-5 gap-y-5 p-16"> 
                {tiers.map((t, i) => (
                    <div key={t.name}>
                        <BasicTier name={t.name} stakingPeriod={t.stakingBonusPeriod} apy={t.apy} bonus={t.bonus} unstakingPeriod={t.unstakingPeriod} bonusColor={t.bonusColor} badgeSource={t.badgeSource} index={i}/> 
                    </div>
                ))} 
            </div> 

            <div className="lg:hidden  bg-[url('/assets/legendary-lines-left.png')] bg-no-repeat col-span-10 w-full items-center mb-16 flex flex-col top-[-15%]"> 
            <div className="lg:hidden  bg-[url('/assets/legendary-lines-right.png')] bg-no-repeat bg-right col-span-10 w-full items-center mb-16 flex flex-col top-[-15%]" id="legendary"> 
                <div className="flex flex-col w-full items-center relative" id="legendary-mobile"> 
                    <Image 
                        src="/assets/legendary.png"
                        alt="badge"
                        width={275}
                        height={275}
                        className="relative bottom-[-5.0rem]"
                    />
                </div> 
                <LegendaryDegenator 
                    name="Legendary Degenator" 
                    stakingPeriod="30 Days" 
                    bonus="900" 
                    unstakingPeriod="48 hours" 
                    bonusColor="#8FDBFF" 
                /> 
            </div> 
            </div> 
        </div> 
    </div> 
    ); 
}

export default Tiers; 
