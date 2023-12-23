import Nav from "../nav/bottomNav/Nav";
import { NavItems } from "@/types/types";

const pageNavigation: NavItems[] = [
    {
        title: 'About',
        link: '../../../app/pages/about/page.tsx'
    },
    {
        title: 'Projects',
        link: '../../../app/pages/projects/page.tsx'
    },
    {
        title: 'Contact',
        link: '../../../app/pages/contact/page.tsx'
    },
]

export default function Footer(){
    return(
       <Nav 
        navItems={pageNavigation}
        /> 
    )
}
