import { NavItems } from '@/types/types';
import Link from 'next/link';

export default function Nav({ navItems }: { navItems: NavItems[] }) {
  return (
    <div className="flex justify-between rounded-full bg-g4 text-labelSm py-2.5 px-5 mx-11 mb-6">
      {navItems.map((item, index) => (
        <Link key={index} href={item.link}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
