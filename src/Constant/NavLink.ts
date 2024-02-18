export interface NavLinksType {
  href: string;
  text: string;
  id: number;
}

export const NavLinks: NavLinksType[] = [
  {
    href: '/home',
    text: 'Home',
    id: 1,
  },
  {
    href: '/login',
    text: 'login',
    id: 2,
  },
  {
    href: '/About',
    text: 'About us',
    id: 3,
  },
  {
    href: '/contact',
    text: 'Contact us',
    id: 4,
  },
];
