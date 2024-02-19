import DisplayTask from '@/components/AllPage/DisplayTask';

export default function AllPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" h-screen flex gap-8">
      <div className=" w-2/4 flex items-center justify-center">
        <div className="box h-[500px] w-full  py-3 px-6 rounded-lg bg-background">
          <h5 className="font-semibold">Today</h5>
          <DisplayTask />
        </div>
      </div>
      <div className="w-2/4 flex items-center justify-center">{children}</div>
    </div>
  );
}
