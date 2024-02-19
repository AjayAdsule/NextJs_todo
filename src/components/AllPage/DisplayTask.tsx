'use client';

import Link from 'next/link';
import DoneTask from '../TodayPage/DoneTask';
import { MoreVertical } from 'lucide-react';
import { useTheme } from 'next-themes';

const DisplayTask = () => {
  const { theme } = useTheme();
  return (
    <Link
      href=""
      className={`flex justify-between items-center rounded-md p-2 ${theme === 'dark' ? 'hover:bg-[#424343]' : 'hover:bg-[#ecedec]'}`}>
      <div className="task_content flex">
        <DoneTask />
        <div>
          <h6 className="text-sm">Title</h6>
          <p className="text-xs text-[#6b6b6b]">description</p>
        </div>
      </div>
      <MoreVertical strokeWidth={1} size={20} />
    </Link>
  );
};

export default DisplayTask;
