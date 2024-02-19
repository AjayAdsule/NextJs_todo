'use client';

import CustomToolTip from '@/components/CustomToolTip';
import Inputs from '@/components/Input';
import { TaskData } from '@/components/TodayPage/common';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Ban, Bell, CheckCircle, Hash, NotepadText, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function TaskPage({ params }: { params: { id: string } }) {
  const [task, setTask] = useState<TaskData>();
  const router = useRouter();
  useEffect(() => {
    const getTask = async (id: string) => {
      const res = await axios.get(`/api/task/${id}`);
      if (res?.data?.success) {
        setTask(res?.data?.task);
      } else {
        console.error(res?.data);
      }
    };
    getTask(params?.id);
  }, [params?.id]);

  const formSchema = z.object({
    title: z.string(),
  });

  const { handleSubmit, register } = useForm<z.infer<typeof formSchema>>({
    defaultValues: async () => {
      const res = await axios.get(`/api/task/${params.id}`);
      return {
        title: res?.data?.task?.title,
      };
    },
  });
  console.log(task);

  return (
    <div className="border-2 h-[500px] w-full  py-3 px-6 rounded-lg bg-background">
      <form>
        <div>
          <div className="modal_body mt-2">
            <Inputs
              type="text"
              {...register('title')}
              className="w-full  hover:bg-[#f6f6f6] font-semibold text-xl"
            />
            <div className="flex highlight_btn  mt-2 gap-2">
              <Button className="bg-[#fff] text-black rounded-2xl text-[0.8rem] shadow-lg hover:-translate-y-0.5">
                <Bell
                  size={20}
                  strokeWidth={1.4}
                  className="mr-2 text-red-600"
                />
                Remind me
              </Button>
              <Button
                className="bg-[#fff] text-black rounded-2xl text-[0.8rem] shadow-lg hover:-translate-y-0.5"
                variant="default">
                <NotepadText strokeWidth={1} className="text-orange-500 mr-2" />
                Personal
              </Button>
              <Button
                className="bg-[#fff] text-black rounded-2xl text-[0.8rem] shadow-lg hover:-translate-y-0.5"
                variant="default">
                <Hash strokeWidth={1} className="text-primary mr-2" />
                Personal
              </Button>
            </div>
            <div className="description mt-3">
              <label htmlFor="description" className="text-sm">
                Description :
              </label>
              <textarea className="w-full resize-y min-h-24 overflow-hidden focus:outline-none p-1 border-2 border-gray-300" />
            </div>
            <div className="footer flex justify-end mt-4 gap-3">
              <Button
                variant="outline"
                onClick={() => router.back()}
                type="button">
                Cancel
              </Button>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
