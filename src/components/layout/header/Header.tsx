import { useRouter } from 'next/router';
import { NavItems } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialLinks from '@/components/SocialLinks';

// type NavProps = {
//     pageNavigation: NavItems[];
//     onNavigation: (url: string) => void;
// }

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
        setMenuState(menuItems.Closed);
    };

    const handleMenuSelection = () => {
        setMenuState(prevState => prevState === menuItems.Closed ? menuItems.Opened : menuItems.Closed);
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
                    className="flex items-center gap-1 rounded-full border border-black px-4 py-0.25 w-fit h-fit"
                    onClick={handleMenuSelection}
                >
                    <p>
                        {menuState.text}
                    </p>
                    <div
                        className="flex gap-0.5"
                        style={{
                            transform: menuState === menuItems.Opened ? 'rotate(90deg)' : 'rotate(0)',
                            transition: "transform 0.5s ease"
                        }}
                    >
                        <div className="w-1 h-1 bg-black rounded-full" />
                        <div className="w-1 h-1 bg-black rounded-full" />
                    </div>
                </div>
            </section>
            <div
                className={`fixed z-20 bg-white right-0 overflow-x-hidden box-border text-black text-menuSm flex flex-col rounded-lg h-[92%] py-16 gap-16`}
                style={{
                    width: `${menuState.width}`,
                    transition: '1s ease'
                }}
            >
                {pageNavigation.slice(1).map((item, index) => (
                    <div
                        key={index}
                        className='flex justify-between items-center w-full px-4'
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
                            <div className="w-1 h-1 bg-black rounded-full" />
                        )}
                    </div>
                ))}
                <div className='px-4'>
                    <SocialLinks />
                </div>
            </div>
        </header>
    )
}

