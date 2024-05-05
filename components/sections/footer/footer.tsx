import Image from "next/image"; 
import { FooterPic } from "@/components/ui/footer-pic"; 
import { FooterLogo } from "@/components/ui/footer-logo"; 

const Footer = () => {
    return (
        <div className="h-full w-full relative"> 
            <FooterLogo /> 
            <FooterPic /> 
        </div> 
    ); 
}

export default Footer; 
