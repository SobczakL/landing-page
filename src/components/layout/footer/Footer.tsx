import { useEffect, useState } from 'react';
import BottomNav from "../../nav/BottomNav";
import { NavItems } from "@/types/types";
import { useRouter } from 'next/router';

const pageNavigation: NavItems[] = [
    {
        title: 'About',
        link: '/views/about'
    },
    {
        title: 'Projects',
        link: '/views/projects'
    },
    {
        title: 'Contact',
        link: '/views/contact'
    },
];

type FooterProps = {
    onNavigation: (loading: boolean) => void;
}

export default function Footer({ onNavigation }: FooterProps) {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollTop = 0;
        window.addEventListener("scroll", () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        }, false);
    }, []);

    const handleNavigation = (url: string) => {
        onNavigation(true);
        router.push(url);
    };

    return (
        <footer className={`flex justify-center w-full mb-8 fixed text-black bottom-0 inset-x-0 transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-full mb-0'}`}>
            <BottomNav navItems={pageNavigation} onNavigation={handleNavigation} />
        </footer>
    );
}

