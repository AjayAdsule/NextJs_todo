import React from 'react';
import { Button } from './ui/button';

const HomeMain = () => {
  return (
    <main className="h-[400px] w-screen flex justify-center items-center">
      <div className="box h-[320px] w-8/12  flex flex-col text-center text-balance">
        <h2 className="text-7xl font-bold">
          Organize your work and life, finally.
        </h2>
        <p className="mt-6 text-xl">
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </p>
        <Button className="mt-6 w-[190px] hover:opacity-85 justify-self-center self-center">
          Start for free
        </Button>
      </div>
    </main>
  );
};

export default HomeMain;
