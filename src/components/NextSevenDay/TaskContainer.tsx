import DailyTask from '../AllPage/DailyTask';
import DisplayTask from '../AllPage/DisplayTask';
import { TaskData } from '../TodayPage/common';

interface ComponentsProps {
  title: string;
  task: TaskData[];
}

const TaskContainer: React.FC<ComponentsProps> = ({ title, task }) => {
  console.log({ task });

  return (
    <div className="h-[200px] w-[300px] border-2 rounded-lg bg-background p-2">
      <h4>{title}</h4>
      <div>
        {task && task.map((todo) => <DailyTask tasks={todo} key={todo._id} />)}
      </div>
    </div>
  );
};

export default TaskContainer;
