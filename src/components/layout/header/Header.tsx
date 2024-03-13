'use client'
import { useRouter } from 'next/router';
import { NavItems } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialLinks from '@/components/SocialLinks';
type NavProps = {
    pageNavigation: NavItems[];
    onNavigation: (url: string) => void;
}

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
    Menu: "hidden",
    Close: "block"
}

export default function Header() {

    const router = useRouter();

    const [currentURL, setCurrentURL] = useState('');
    const [menuSelect, setMenuSelect] = useState("Menu");
    const [menuDisplay, setMenuDisplay] = useState("hidden");

    useEffect(() => {
        setCurrentURL(router.asPath);

        const handleRouteChange = (url: string) => {
            setCurrentURL(url);
        }

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    const handleNavigation = (url: string) => {
        router.push(url);
        setMenuDisplay("hidden")
    };

    const handleMenuSelection = () => {
        // Change menu button text
        if (menuSelect == "Menu") {
            setMenuSelect("Close")
        }
        else {
            setMenuSelect("Menu")
        }

        // Switch menu display
        if (menuDisplay == "hidden") {
            setMenuDisplay("block")
        }
        else {
            setMenuDisplay("hidden")
        }

    }
    return (
        <header>
            <section className='flex justify-between items-center text-black bg-g1 px-4 md:px-10 lg:px-16'>
                <Link
                    className="font-sans text-labelSm md:text-labelMd lg:text-labelLg py-6"
                    href={pageNavigation[0].link}
                >
                    {pageNavigation[0].title}
                </Link>
                <div className="flex items-center gap-1 rounded-full border border-black px-4 py-0.25 w-fit h-fit"
                    onClick={() => handleMenuSelection()}
                >
                    <p>
                        {menuSelect}
                    </p>
                    <div className="flex gap-0.5">
                        <div className="w-1 h-1 bg-black rounded-full" />
                        <div className="w-1 h-1 bg-black rounded-full" />
                    </div>
                </div>
            </section>
            <div className={`absolute ${menuDisplay} z-20 bg-white text-black text-menuSm flex flex-col rounded-lg w-full h-full px-4 py-16 gap-16`}>
                {pageNavigation.map((item, index) => (

                    <div
                        key={index}
                        className='flex flex-col justify-between items-center gap-12'
                    >
                        {index !== 0 && (
                            <div className='flex justify-between items-center w-full'
                            >
                                <p
                                    className=''
                                    onClick={() => handleNavigation(item.link)}
                                >
                                    {item.title}
                                </p>
                                <div className="w-1 h-1 bg-black rounded-full" />
                            </div>
                        )}
                    </div>
                ))}
                <SocialLinks />
            </div>
        </header>
    )
}
