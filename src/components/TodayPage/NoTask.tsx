'use client';

import { ShowMessage } from './ShowMessage';
import AddTask from './AddTask';
import { TaskData } from './common';
import { Plus } from 'lucide-react';

interface AppProps {
  data: TaskData;
}
export default function AddTaskForToday({ data }: AppProps) {
  return (
    <>
      <button className="flex text-sm hover:text-primary">
        <Plus className="mr-4" size={18} /> Add Task
      </button>
      {/* <ShowMessage /> */}
      {/* <AddTask /> */}
    </>
  );
}
