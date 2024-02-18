'use client';

import { Controller, useForm } from 'react-hook-form';
import Inputs from '../Input';
import { Flag } from 'lucide-react';
import { useState } from 'react';
import CustomCalender from '../Calender';
import { Button } from '../ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import usePost from '@/customHooks/usePost';

const AddTask = () => {
  const [priority, setPriority] = useState(false);
  const formSchema = z.object({
    title: z.string().min(1, { message: 'Please add title to continue' }),
    description: z.string(),
    priority: z.boolean(),
    date: z.date(),
  });
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    register,
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      priority,
    },
    resolver: zodResolver(formSchema),
  });
  const handlePriorityClick = () => {
    const newPriority = !priority; // Toggle priority value
    setPriority(newPriority); // Update local state
    setValue('priority', newPriority); // Update priority value in useForm
  };
  const { addPosts } = usePost();
  const handleTaskSubmit = async (value: z.infer<typeof formSchema>) => {
    const task = await addPosts(value);
    console.log({ value, task });
  };
  return (
    <div className="w-full border-2 h-fit mt-8 p-1">
      <form className="flex flex-col" onSubmit={handleSubmit(handleTaskSubmit)}>
        <Inputs
          placeholder="Task Name"
          className="h-6 text-sm font-semibold"
          {...register('title')}
        />
        {errors.title && (
          <span className="text-[12px]  m-2 text-red-600">
            {errors.title.message}
          </span>
        )}
        <Inputs
          placeholder="Description"
          className="h-6 text-sm mt-2"
          {...register('description')}
        />
        <div className="flex mt-3 gap-3 ">
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <CustomCalender
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
              />
            )}
          />
          <button
            className={`priority border flex gap-x-3 h-[40px] items-center pl-2 w-[150px] ${priority ? 'bg-green-500 text-white' : ''}`}
            onClick={handlePriorityClick}
            type="button">
            <Flag size={16} strokeWidth={1} />
            Priority
          </button>
        </div>

        <div className="flex gap-4 justify-end px-2">
          {/* <Button variant="outline" size="sm" type="button">
            Cancel
          </Button> */}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default AddTask;
