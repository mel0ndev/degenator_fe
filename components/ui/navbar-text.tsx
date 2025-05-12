
interface INavbarText {
    text: string; 
    scrollTo: string; 
}

export const NavbarText = ({text, scrollTo}: INavbarText) => {
    return (
        <a href={`#${scrollTo}`}> 
        <span className="drop-shadow-lg shadow-black flex items-center justify-center font-semibold text-lg relative hover:text-gray-200 hover:cursor-pointer">
            {/*<span className="absolute text-black bottom-[-5px] z-0"> {text} </span>*/}
            <span className="z-5 relative bold"> {text} </span> 
        </span>
        </a> 

    ); 
}
