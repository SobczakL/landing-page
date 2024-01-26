import BottomNav from "../../nav/BottomNav";
import { NavItems } from "@/types/types";

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
]

export default function Footer() {
    return (
        <footer className="flex bg-g1 text-black justify-center">
            <BottomNav
                navItems={pageNavigation}
            />
        </footer>
    )
}
