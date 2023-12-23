import { NavItems } from "@/types/types";

export default function Nav({ navItems }: { navItems: NavItems[] }) {
  return (
    <nav>
      {navItems.map((item, index) => (
        <a key={index} href={item.link}>{item.title}</a>
      ))}
    </nav>
  );
}
