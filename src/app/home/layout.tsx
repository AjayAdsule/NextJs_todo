import { HomeLayoutWrapper } from '@/components/HomeLayoutWrapper';
import SideBar from '@/components/SideBar';

interface AppProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: AppProps) {
  return (
    <>
      <HomeLayoutWrapper>
        <SideBar />
        <div className=" w-[70%] m-auto h-screen pt-6">{children}</div>
      </HomeLayoutWrapper>
    </>
  );
}
