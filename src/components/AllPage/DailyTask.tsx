'use client';

import { MoreVertical } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { TaskData } from '../TodayPage/common';
import DoneTask from '../TodayPage/DoneTask';
import TaskModal from '../Modal/TaskModal';

const DailyTask = ({ tasks }: { tasks: TaskData }) => {
  const { title, description, _id } = tasks;
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (isModalOpen)
    return (
      <TaskModal
        id={_id}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        task={tasks}
      />
    );

  return (
    <div
      className={`flex justify-between items-center rounded-md p-2 ${theme === 'dark' ? 'hover:bg-[#424343]' : 'hover:bg-[#ecedec]'}`}
      onClick={() => setIsModalOpen(!isModalOpen)}>
      <div className="task_content flex">
        <DoneTask />
        <div>
          <h6 className="text-sm">{title}</h6>
          <p className="text-xs text-[#6b6b6b]">{description}</p>
        </div>
      </div>
      <MoreVertical strokeWidth={1} size={20} />
    </div>
  );
};

export default DailyTask;
