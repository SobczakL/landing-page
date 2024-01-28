'use client'
import { useRouter } from 'next/navigation';
import { NavItems } from '@/types/types';

export default function BottomNav({ navItems }: { navItems: NavItems[] }) {
    const router = useRouter();

    return (
        <div className="flex justify-center gap-8 bg-g4 rounded-full max-w-96 px-6 py-2">
            {navItems.map((item, index) => (
                <button
                    className='font-serif text-labelSm md:text-labelMd'
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
