'use client';

import Link from 'next/link';
import DoneTask from '../TodayPage/DoneTask';
import { MoreVertical } from 'lucide-react';
import { useTheme } from 'next-themes';
import { TaskData } from '../TodayPage/common';

const DisplayTask = ({ tasks }: { tasks: TaskData }) => {
  const { title, description, _id } = tasks;
  const { theme } = useTheme();
  return (
    <>
      <Link
        href={`/home/all/${_id}`}
        className={`flex justify-between items-center rounded-md p-2 ${theme === 'dark' ? 'hover:bg-[#424343]' : 'hover:bg-[#ecedec]'}`}>
        <div className="task_content flex">
          <DoneTask />
          <div>
            <h6 className="text-sm">{title}</h6>
            <p className="text-xs text-[#6b6b6b]">{description}</p>
          </div>
        </div>
        <MoreVertical strokeWidth={1} size={20} />
      </Link>
    </>
  );
};

export default DisplayTask;
