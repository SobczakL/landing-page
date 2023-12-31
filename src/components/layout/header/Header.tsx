import { NavItems } from "@/types/types";
import Nav from "../nav/topNav/Nav";

const pageNavigation: NavItems[] = [
    {
        title: 'Lucas Sobczak',
        link: '/'
    },
    {
        title: 'Contact',
        link: '/contact'
    },
]

export default function Header(){
    return(
        <header className="text-black">
            <Nav 
                navItems={pageNavigation}
            /> 
        </header>
    )
}
