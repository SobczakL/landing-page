import { useRouter } from 'next/router';
import { NavItems } from "@/types/types";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import SocialLinks from '@/components/SocialLinks';

const pageNavigation: NavItems[] = [
    {
        title: 'LUCAS SOBCZAK',
        link: '/'
    },
    {
        title: 'ABOUT',
        link: '/views/about'
    },
    {
        title: 'PROJECTS',
        link: '/views/projects'
    },
    {
        title: 'CONTACT',
        link: '/views/contact'
    },
]

const menuItems = {
    Closed: { text: "Menu", width: '0%' },
    Opened: { text: "Close", width: '100%' }
}

export default function Header() {
    const router = useRouter();
    const [currentURL, setCurrentURL] = useState('');
    const [menuState, setMenuState] = useState(menuItems.Closed);
    const [hoveredLink, setHoveredLink] = useState('');
    const menuRef = useRef(null);

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            setCurrentURL(url);
        };

        setCurrentURL(router.asPath);

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router])

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current?.contains(event.target)) {
                setMenuState(menuItems.Closed);
            }
        }

        if (menuRef.current) {
            menuRef.current.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            if (menuRef.current) {
                menuRef.current.removeEventListener("mousedown", handleClickOutside);
            }
        };
    }, [])

    const handleMenuSelection = () => {
        setMenuState(prevState => prevState === menuItems.Closed ? menuItems.Opened : menuItems.Closed);
    };

    const handleNavigation = (url: string) => {
        router.push(url);
        setMenuState(menuItems.Closed);
    };


    return (
        <header>
            <section className='flex justify-between items-center text-black bg-g1 px-4 md:px-10 lg:px-16'>
                <Link
                    className="font-sans text-labelSm md:text-labelMd lg:text-labelLg py-6"
                    href={pageNavigation[0].link}
                    onClick={() => handleNavigation(pageNavigation[0].link)}
                >
                    {pageNavigation[0].title}
                </Link>
                <div
                    className="flex items-center gap-1 rounded-full border border-black px-4 py-0.25 w-fit h-fit text-labelSm md:text-labelMd "
                    onClick={handleMenuSelection}
                    style={{
                        backgroundColor: menuState === menuItems.Closed ? "inherit" : "black",
                        color: menuState === menuItems.Closed ? "inherit" : "white"
                    }}
                >
                    <p>
                        {menuState.text}
                    </p>
                    <div
                        className="flex gap-0.5"
                        style={{
                            transform: menuState === menuItems.Opened ? 'rotate(90deg)' : 'rotate(0)',
                            transition: "transform 0.5s ease",
                            backgroundColor: menuState === menuItems.Closed ? "inherit" : "white",
                        }}
                    >
                        <div className="w-1 h-1 bg-black rounded-full" />
                        <div className="w-1 h-1 bg-black rounded-full" />
                    </div>
                </div>
            </section>
            <div
                ref={menuRef}
                className='fixed z-20 right-0 overflow-x-hidden box-border rounded-lg h-[92%]'
                style={{
                    width: `${menuState.width}`,
                    transition: 'width 0.5s ease-in-out'
                }}
            >
                <div
                    className='bg-white md:bg-transparent md:pt-12 text-black text-menuSm md:text-menuMd drop-shadow-[5px_0px_35px_rgba(0,0,0,0.5)] flex flex-col gap-16 h-full md:ml-auto md:mr-10 lg:mr-16 md:max-h-[70%] md:max-w-[300px] lg:max-w-[360px]'
                >
                    <div className='bg-white md:backdrop-opacity-95 md:backdrop-invert md:bg-white/95 flex flex-col py-10 gap-12 rounded-lg'>
                        {pageNavigation.slice(1).map((item, index) => (
                            <div
                                key={index}
                                className='flex justify-between items-center w-full px-4 md:px-8'
                                onMouseEnter={() => setHoveredLink(item.link)}
                                onMouseLeave={() => setHoveredLink('')}
                            >
                                <p
                                    className=''
                                    onClick={() => handleNavigation(item.link)}
                                >
                                    {item.title}
                                </p>
                                {hoveredLink === item.link && (
                                    <div className="w-2 h-2 bg-black rounded-full" />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className='px-4 md:px-8 bg-white md:backdrop-opacity-95 md:backdrop-invert md:bg-b1/95 md:text-white rounded-lg'>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </header>
    )
}

