'use client'
import { useRouter } from 'next/navigation';
import { NavItems } from '@/types/types';

export default function Nav({ navItems }: { navItems: NavItems[] }) {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-8 bg-g4 rounded-full px-6 py-2">
      {navItems.map((item, index) => (
        <button
          type="button"
          key={index}
          onClick={() => router.push(item.link)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}
