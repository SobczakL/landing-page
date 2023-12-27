import Nav from "../nav/bottomNav/Nav";
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
        <footer className="flex-shrink-0 text-black px-17">
            <Nav 
                navItems={pageNavigation}
            /> 
        </footer>
    )
}
