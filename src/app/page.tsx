import HomeMain from '@/components/HomeMain';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container flex justify-center">
        <HomeMain />
      </div>
    </>
  );
};

export default Home;
