'use client';

import { generateImageText } from '@/lib/String/generator';
import { Bell, ChevronDown, Columns2, Plus } from 'lucide-react';
import { useState } from 'react';
import AddTaskModal from './Modal/AddTaskModal';
import { homeNavLinks } from '@/Constant/HomeLinks';
import Link from 'next/link';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`h-screen ${isOpen ? 'w-72' : 'w-6'} duration-300 p-4 relative bg-background ${!isOpen ? 'bg-inherit ' : ''} `}>
      <nav className={`h-full flex flex-col overflow-hidden `}>
        <div className="flex justify-between ">
          <div className="profile flex">
            <div className="h-6 w-6 rounded-full bg-primary text-black text-center">
              {generateImageText('Ajay')}
            </div>
            <p className="ml-2">Ajay</p>
            <ChevronDown className="ml-2" strokeWidth={1} />
          </div>
          <div className="icons flex">
            <Bell strokeWidth={1} className="mr-4" />
            <Columns2
              strokeWidth={1}
              className="absolute right-1"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        <div className="nav_menu mt-8">
          <AddTaskModal />
          <ol className="mt-4">
            {homeNavLinks.map((links, indx) => (
              <li key={indx} className="flex gap-3 mb-4">
                <Link href={links.href} className="flex">
                  <div>{links.icon}</div>
                  <p className="ml-4"> {links.name}</p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </aside>
  );
}
