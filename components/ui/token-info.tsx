interface ITokenInfoModule {
    title: string; 
    info: string;
    important?: boolean; 
    className?: string; 
}

export const TokenInfoModule = ({title, info, important, className}: ITokenInfoModule) => {

    return (
        <div className={`${className} pt-5 flex flex-col justify-center items-center font-poppins`}>
            <div className="flex flex-col items-left">
                <span className="text-accent"> 
                    {title.toUpperCase()}
                </span> 
                {important ? (
                    <span className="text-3xl font-bold pt-2 lg:pt-4 lg:mb-5"> 
                        {info.toUpperCase()}
                    </span>
                ) : (
                    <span className="text-xl pt-2 lg:pt-4"> 
                        {info.toUpperCase()}
                    </span>
                )}
            </div>
        </div> 
    ); 
}
