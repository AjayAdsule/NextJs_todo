import usePost from '@/customHooks/usePost';
import React from 'react';
import { GetDays } from '@/Constant/days';
import TaskContainer from '@/components/NextSevenDay/TaskContainer';
const NextSevenDayPage = async () => {
  const { getPosts } = usePost();
  const data = await getPosts();

  // get next seven day task
  const currentDate = new Date().getDate();
  let nextSevenDayTask: { [key: string]: any } = {};
  for (let task of data.taskData) {
    const taskDate = new Date(task.date);
    const getDate = taskDate.getDate();
    const getDay = taskDate.getDay();
    if (getDate >= currentDate && getDate <= currentDate + 6) {
      const dayOfWeek = GetDays[getDay];
      if (!nextSevenDayTask[dayOfWeek]) {
        nextSevenDayTask[dayOfWeek] = [];
      }
      nextSevenDayTask[dayOfWeek].push({ ...task });
    }
  }

  return (
    <section className=" w-fit">
      <h4 className="text-xl font-semibold">Next Seven Day Tasks</h4>
      <div className="mt-5 flex gap-6 mr-6">
        {nextSevenDayTask &&
          Object.keys(nextSevenDayTask).map((days) => (
            <TaskContainer
              title={days}
              key={days}
              task={nextSevenDayTask[days]}
            />
          ))}
      </div>
    </section>
  );
};

export default NextSevenDayPage;
