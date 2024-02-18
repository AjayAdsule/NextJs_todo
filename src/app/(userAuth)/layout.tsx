import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <section className="container h-screen flex justify-center items-center">
      <div className="h-[550px]  w-[800px] flex items-center">
        <div>
          <Image src="/draw.png" width={350} height={350} alt="Draw image" />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
