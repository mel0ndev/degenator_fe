import Image from "next/image"; 
import { HowToCard } from "@/components/ui/howto-card"; 

const HowTo = () => {
   
    const cards = [
        {titleColor: "#FCEE21", title: "Create a Wallet", description: "Download metamask or your wallet of choice from the App Store or Google Play store for free. Desktop users, download the metamask extension by going to 'metamask.io.'", leftAligned: true, imageSrc: "/assets/cloud.svg"},
        {titleColor: "#B2BEE5", title: "Get Some ETH", description: "Have ETH ready to swap for $DGN. If you don't have any ETH, you can buy some directly on metamask, transfer from another wallet, or buy an an exchange and send it to your wallet.", leftAligned: false, imageSrc: "/assets/eth.svg"},
        {titleColor: "#FF007A", title: "Go to Uniswap", description: "Go to app.uniswap.org in your browser and connect your wallet. Paste the $DGN token address into Uniswap, select Degenator, and confirm.", leftAligned: true, imageSrc: "/assets/uni.svg", uniswap: true},
        {titleColor: "#FFFFFF", title: "Swap ETH for $DGN", description: "Swap ETH for $DGN by clicking the swap button on Uniswap. There is a 5% buy/sell tax on the token, so make sure to increase the slippage to 5% for a successful swap.", leftAligned: false, imageSrc: "/assets/dgn.svg"}
    ]


    return (
        <div className="grid grid-cols-10 grid-rows-5 gap-y-10"> 
            <span className="font-bukabird text-white text-5xl col-span-10 flex flex-col items-center justify-center"> 
                How to Buy
            </span> 
            <div className="absolute">
            <div className="hidden xl:flex relative"> 
                <Image
                    src="/assets/waitwhat.png"
                    alt="image"
                    width={500}
                    height={500}
                    className="hidden xl:block relative left-[10rem] top-[3rem]"
                />
            </div> 
            <div className="hidden xl:flex relative"> 
                <Image
                    src="/assets/explode.png"
                    alt="image"
                    width={250}
                    height={250}
                    className="hidden xl:block relative right-[-88rem] top-[-14rem]"
                />
            </div> 
            </div> 
            {cards.map((c) => (
                <div key={c.title} className="lg:col-start-3 col-start-2 lg:col-span-6 col-span-8 flex flex-col items-center"> 
                    <HowToCard titleColor={c.titleColor} title={c.title} description={c.description} leftAligned={c.leftAligned} imageSrc={c.imageSrc} uniswap={c.uniswap} /> 
                </div>  
            ))}


        </div> 
    ); 
}

export default HowTo; 
