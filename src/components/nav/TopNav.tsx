import { NavItems } from "@/types/types";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function TopNav({ navItems }: { navItems: NavItems[] }) {
    return (
        <div className="flex justify-between font-display text-labelSm md:text-labelMd lg:text-labelLg py-6">
            <Link href={navItems[0].link}>{navItems[0].title}</Link>
            <Link href={navItems[1].link}>
                <Badge text={navItems[1].title} />
            </Link>
        </div>
    );
}
