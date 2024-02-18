// custom hook for getting date wise task

import { TaskData } from '@/components/TodayPage/common';

const useFilterTask = () => {
  function getTodayTask(task: TaskData[]) {
    return task
      .map((item) => {
        return item?.date.split('T')[0];
      })
      .filter((item) => {
        const todayDate = new Date().toISOString();
        return item?.date === todayDate.split('T')[0];
      });
  }
};

export default useFilterTask;
