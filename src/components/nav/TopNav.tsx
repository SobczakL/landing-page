import { NavItems } from "@/types/types";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function TopNav({ navItems }: { navItems: NavItems[] }) {
    return (
        <div className="flex justify-between font-display text-labelSm md:text-labelMd lg:text-labelLg py-6">
            <div className="flex justify-between">
                <Link href={navItems[1].link}>{navItems[1].title}</Link>
                <Link href={navItems[2].link}>{navItems[2].title}</Link>
                <Link href={navItems[3].link}>
                    <Badge text={navItems[3].title} />
                </Link>
            </div>
        </div>
    );
}
