'use client'
import { useRouter } from 'next/navigation';
import { NavItems } from '@/types/types';
type BottomNavProps = {
    navItems: NavItems[];
    onNavigation: (url: string) => void;
}

export default function BottomNav({ navItems, onNavigation }: BottomNavProps) {
    const router = useRouter();

    const handleNavigation = (url: string) => {
        router.push(url);
    };

    return (
        <div className="flex justify-center gap-8 bg-g4 rounded-full max-w-96 px-6 py-2">
            {navItems.map((item, index) => (
                <button
                    className='font-serif text-labelSm md:text-labelMd'
                    type="button"
                    key={index}
                    onClick={() => handleNavigation(item.link)}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
}
