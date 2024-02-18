import { NavLinks, NavLinksType } from '@/Constant/NavLink';
import Link from 'next/link';
import ThemeChangeBtn from './Buttons/ThemeChangeBtn';
const Navbar = () => {
  return (
    <nav className="h-[70px] p-2 flex justify-between">
      <Link href="/">Todo App</Link>
      <div>
        <ol className="flex gap-6 mr-4 ">
          {NavLinks.map((nav: NavLinksType) => (
            <li
              key={nav.id}
              className=" hover:bg-primary hover:text-black text-center rounded-sm h-8 px-3 py-[0.20rem]">
              <Link href={nav.href}>{nav.text}</Link>
            </li>
          ))}
          <li>
            <ThemeChangeBtn />
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
