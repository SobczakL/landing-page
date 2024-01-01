import BottomNav from "../../nav/BottomNav";
import { NavItems } from "@/types/types";

const pageNavigation: NavItems[] = [
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Projects',
        link: '/projects'
    },
    {
        title: 'Contact',
        link: '/contact'
    },
]

export default function Footer(){
    return(
        <footer className="flex flex-shrink-0 text-black justify-center">
            <BottomNav 
                navItems={pageNavigation}
            /> 
        </footer>
    )
}
