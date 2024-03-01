import Footer from '@/components/Footer';
import HomeMain from '@/components/HomeMain';
import Navbar from '@/components/Navbar';
import {
  AndroidSvg,
  AppleWatchSvg,
  ChromeSvg,
  DesktopSvg,
  FireFoxSvg,
  HuaweiSvg,
  IPadSvg,
  IphoneSvg,
  MacSvg,
  SafariSvg,
  SiriSvg,
  WearOsSvg,
  WebSvg,
  WindowsSvg,
} from '@/components/SvgCompoinent';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container flex justify-center">
        <HomeMain />
      </div>
      <div className="mt-32">
        <Image src="/app.webp" alt="app_pic" height={1920} width={1300} />
        <div className="client mt-3">
          <h4 className="text-center text-3xl font-bold">
            Join +40,000,000 highly effective individuals, families and teams
          </h4>
          <div className="client_img flex justify-around mt-4">
            <Image src="/uber.svg" alt="uber" height={130} width={130} />
            <Image src="/remax.svg" alt="remax" height={130} width={130} />
            <Image
              src="/vanguard.svg"
              alt="vanguard"
              height={130}
              width={130}
            />
            <Image src="/wework.svg" alt="wework" height={130} width={130} />
            <Image
              src="/harvard-university.svg"
              alt="harvard-university"
              height={130}
              width={130}
            />
          </div>
        </div>
        <div className="bg-[url('https://www.any.do/_next/static/media/platform-links.6c778b32.webp')] mt-12 bg-[length:1340px] flex flex-col bg-no-repeat h-[1300px] justify-center">
          <div className=" w-full flex justify-center">
            <div className=" w-[650px]">
              <h4 className="text-5xl text-center font-bold">
                Organize anything
                <br /> with anyone,
                <br /> anywhere
              </h4>
              <h5 className="text-3xl font-semibold text-center mt-12">
                Available on:
              </h5>
              <div className="grid grid-cols-7 gap-y-8 mt-12">
                <AndroidSvg />
                <IphoneSvg />
                <IPadSvg />
                <MacSvg />
                <WebSvg />
                <SiriSvg />
                <SafariSvg />
                <WindowsSvg />
                <ChromeSvg />
                <FireFoxSvg />
                <AppleWatchSvg />
                <WearOsSvg />
                <HuaweiSvg />
                <DesktopSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
