'use client'
import { useRouter } from 'next/navigation';
import { NavItems } from '@/types/types';

export default function BottomNav({ navItems }: { navItems: NavItems[] }) {
  const router = useRouter();

  return (
    <div className="font-serif flex justify-center max-w-96 gap-8 bg-g4 rounded-full px-6 py-2 mx-12 md:mx-auto mb-6 text-labelSm md:text-labelMd">
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
