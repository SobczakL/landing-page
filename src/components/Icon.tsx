import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function Icon() {

    const router = useRouter()

    const [iconPosition, setIconPosition] = useState({ top: '0%', right: '0%', transition: 'none' });
    const [currentPage, setCurrentPage] = useState(router.pathname)

    useEffect(() => {
        const handleRouteChangeStart = (url: string) => {
            setCurrentPage(url)
        };
        router.events.on('routeChangeStart', handleRouteChangeStart)

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
        }
    }, [router]);

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
            className="absolute right-0 px-4 md:px-10 lg:px-16 py-8 md:py-8 lg:py-12 z-10" >
            <div
                style={{
                    animation: "fadeIcon 10s linear infinite"
                }}
                className="relative rounded-full border border-r1 w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex justify-center items-center">
                <div className="rounded-full border border-black w-1 h-1"></div>
                <div
                    className="absolute rounded-full border border-black w-8 h-8 transform translate-y-6 -translate-x-6"
                ></div>
            </div>
        </div >

    )
}
