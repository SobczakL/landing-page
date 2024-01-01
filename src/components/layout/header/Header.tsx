import { NavItems } from "@/types/types";
import TopNav from "../../nav/TopNav";

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
            <TopNav 
                navItems={pageNavigation}
            /> 
        </header>
    )
}
