import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { SiGitbook } from "react-icons/si";
import { Button } from "@/components/ui/button"; 

export const Socials = () => {
    return (
        <div className="grid grid-cols-10 flex items-center lg:mt-8 w-full pb-6"> 
            <div className="col-span-8 col-start-2 border-t lg:mt-16 mt-4 w-full grid grid-cols-2"> 
                <div className="p-6 pt-0 mt-6 text-white"> 
                    Copyright 2024 All Rights Reserved.
                </div> 

                <div className="flex justify-end p-6 pt-0 mt-6"> 
                    <div className="grid grid-cols-3 gap-x-5">
                        <div> 
                            <Button size="icon" variant="socials">
                                <FaXTwitter color="#00071A" size="sm"/> 
                            </Button>  
                        </div> 
                        <div> 
                            <Button size="icon" variant="socials">
                                <FaTelegram color="#00071A" size="sm"/> 
                            </Button>  
                        </div> 
                        <div> 
                            <Button size="icon" variant="socials">
                                <SiGitbook color="#00071A" size="sm"/> 
                            </Button>  
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}
