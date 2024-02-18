import { CalendarCheck, CalendarDays, Inbox, Search } from 'lucide-react';

export interface HomeLinkProps {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export const homeNavLinks: HomeLinkProps[] = [
  {
    name: 'Search',
    icon: <Search size={20} />,
    href: '/search',
  },
  {
    name: 'Inbox',
    icon: <Inbox size={20} />,
    href: '/inbox',
  },
  {
    name: 'Todoy',
    icon: <CalendarCheck size={20} />,
    href: '/home/today',
  },
  {
    name: 'Upcoming',
    icon: <CalendarDays size={20} />,
    href: '/upcoming',
  },
];
