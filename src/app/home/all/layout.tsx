import DisplayTask from '@/components/AllPage/DisplayTask';
import HomeNav from '@/components/HomeNav';
import { TaskData } from '@/components/TodayPage/common';
import usePost from '@/customHooks/usePost';

export default async function AllPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getPosts } = usePost();
  const data = await getPosts();

  return (
    <>
      <HomeNav />
      <div className=" flex gap-8 mt-6">
        <div className=" w-2/4 flex items-center justify-center">
          <div className="box h-[500px] w-full  py-3 px-6 rounded-lg bg-background">
            <h5 className="font-semibold">Today</h5>
            {data?.taskData?.length &&
              data?.taskData.map((tasks: TaskData) => (
                <DisplayTask tasks={tasks} key={tasks._id} />
              ))}
          </div>
        </div>
        <div className="w-2/4 flex items-center justify-center">{children}</div>
      </div>
    </>
  );
}
