import Image from 'next/image';

export const ShowMessage = () => {
  return (
    <div className=" w-full mt-6 h-[430px] flex justify-center">
      <div className="card  w-[50%] flex flex-col items-center">
        <Image src="/message.png" alt="message" width={300} height={300} />
        <p className="text-xl font-semibold">Enjoy your day, Ajay.</p>
      </div>
    </div>
  );
};
