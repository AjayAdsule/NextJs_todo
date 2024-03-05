import AddTaskForToday from '@/components/TodayPage/NoTask';
import { ShowMessage } from '@/components/TodayPage/ShowMessage';
import TodoList from '@/components/TodayPage/Todo';
import { TaskData } from '@/components/TodayPage/common';
import usePost from '@/customHooks/usePost';

const TodayPage = async () => {
  const { getPosts } = usePost();
  const { taskData } = await getPosts();
  //get current date task
  const currentDate = new Date().getDate();
  const currentDateTask = taskData?.filter((task: TaskData) => {
    const getCurrentTaskDate = new Date(task.date).getDate();
    return getCurrentTaskDate === currentDate;
  });

  return (
    <>
      <div className="header ">
        <h4 className="font-bold text-2xl">Hello Ajay</h4>
        <h4 className="font-bold text-2xl text-[#777676]">
          Remove doubts with action
        </h4>
      </div>
      <div className="content mt-6">
        <AddTaskForToday data={taskData} />
        {currentDateTask.length ? (
          currentDateTask.map((task: TaskData) => {
            const { title, description, isCompleted, _id } = task;
            return <TodoList title={title} id={_id} key={_id} />;
          })
        ) : (
          <ShowMessage />
        )}
      </div>
    </>
  );
};

export default TodayPage;
