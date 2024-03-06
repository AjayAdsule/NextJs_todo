import React from 'react';
import {
  CalendarCheck,
  MoreHorizontal,
  RefreshCcwDot,
  Headphones,
  Search,
} from 'lucide-react';
const HomeNav = () => {
  return (
    <nav className="nav  h-[40px] flex justify-between">
      <div className="cap rounded-2xl border-2 w-[300px] flex  px-2 items-center justify-between bg-white">
        <div className="flex gap-x-2 items-center">
          <CalendarCheck size={23} strokeWidth={1.45} />
          <h5 className="text-xl font-medium">All my tasks</h5>
        </div>
        <MoreHorizontal size={20} strokeWidth={1.25} />
      </div>
      <div className="rounded-2xl w-[100px] flex px-2 bg-white items-center justify-between">
        <RefreshCcwDot size={22} strokeWidth={1.25} />
        <Headphones size={22} strokeWidth={1.25} />
        <Search size={22} strokeWidth={1.25} />
      </div>
    </nav>
  );
};

export default HomeNav;
