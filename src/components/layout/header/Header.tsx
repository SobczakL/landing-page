import { NavItems } from "@/types/types";
import TopNav from "../../nav/TopNav";

const pageNavigation: NavItems[] = [
    {
        title: 'LUCAS SOBCZAK',
        link: '/'
    },
    {
        title: 'CONTACT',
        link: '/contact'
    },
]

export default function Header() {
    return (
        <header className="text-black bg-g1 px-4 md:px-10">
            <TopNav
                navItems={pageNavigation}
            />
        </header>
    )
}
