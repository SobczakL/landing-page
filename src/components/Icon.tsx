import { useEffect, useState } from "react";

type IconProps = {
    currentPage: string;
}

export default function Icon({ currentPage }: IconProps) {

    const [iconPosition, setIconPosition] = useState({ top: '0%', right: '0%', transition: 'none' });

    useEffect(() => {
        switch (currentPage) {
            case '/views/contact':
            case '/views/about':
                setIconPosition({ top: '70%', right: '0%', transition: 'top 1s, right 1s' });
                break;
            case '/views/projects':
                setIconPosition({ top: '0%', right: '0%', transition: 'top 1s, right 1s' });
                break;
            default:
                setIconPosition({ top: '0%', right: '0%', transition: 'top 1s, right 1s' });
                break;
        }
    }, [currentPage]); return (
        <div
            style={iconPosition}
            className="absolute right-0 px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 z-10" >
            <div
                style={{
                    animation: "fadeIcon 10s linear infinite"
                }}
                className="relative rounded-full border border-r1 w-16 h-16 flex justify-center items-center">
                <div className="rounded-full border border-black w-1 h-1"></div>
                <div
                    className="absolute rounded-full border border-black w-10 h-10 transform translate-y-6 -translate-x-6"
                ></div>
            </div>
        </div >

    )
}
