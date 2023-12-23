import { NavItems } from '@/types/types';
import Link from 'next/link';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function Nav({ navItems }: { navItems: NavItems[] }) {

  return (
    <BottomNavigation
      showLabels
    >
      {navItems.map((item, index) => (
        <Link key={index} href={item.link}>
          <BottomNavigationAction label={item.title} />
        </Link>
      ))}
    </BottomNavigation>
  );
}
