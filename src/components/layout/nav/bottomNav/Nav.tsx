import { NavItems } from '@/types/types';
import Link from 'next/link';

export default function Nav({ navItems }: { navItems: NavItems[] }) {

  return (
        <div className="flex justify-between">
            {navItems.map((item, index) => (
                <Link key={index} href={item.link}>{item.title}</Link>
            ))}
        </div>
  );
}
