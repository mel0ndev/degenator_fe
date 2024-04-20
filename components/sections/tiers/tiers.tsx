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
        <div className="grid grid-cols-10 grid-row-5 pt-14 mt-10 gap-y-8"> 
            <div className="font-bukabird col-span-10 flex items-center justify-center text-5xl"> 
                Higher tier, better rewards
            </div>

            <div className="font-poppins col-span-10 flex items-center justify-center text-lg"> 
                Total Supply Staked: [amount]

            </div>
            
            <div className="col-span-8 col-start-2 flex flex-col items-center"> 
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

            <div className="col-span-4 col-start-4 w-full bg-black items-center flex flex-col"> 
                <LegendaryDegenator /> 
            </div> 

        </div>
    ); 
}

export default Tiers; 
