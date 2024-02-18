import DoneTask from './DoneTask';

import Link from 'next/link';
import usePost from '@/customHooks/usePost';
import ClientActions from './TodoCardActios';

interface TodoListProps {
  title: string;
  description?: string;
  isCompleted?: boolean;
  id: string;
}
export default function TodoList({
  title,
  description,
  isCompleted,
  id,
}: TodoListProps) {
  return (
    <div className="mt-4 h-20 w-full shadow-md flex justify-between p-2 items-center">
      <div className=" flex ">
        <DoneTask />
        <div className=" w-[650px]">
          <Link href={`/home/today/${id}`} scroll={false}>
            <h6>{title}</h6>
            <p className="text-[#777676]">{description}</p>
          </Link>
        </div>
      </div>
      {/* this client component */}
      <ClientActions id={id} />
    </div>
  );
}
