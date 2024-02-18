'use client';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { GoPlus } from 'react-icons/go';
import { Flag } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import CustomCalender from '../Calender';
import { revalidateTag } from 'next/cache';
import action from '@/app/actions';
import { useToast } from '../ui/use-toast';
import { ToastAction } from '../ui/toast';

const AddTaskModal = () => {
  type FormField = {
    title: string;
    description: string;
    date: Date;
    priority: boolean;
  };
  const [priority, setPriority] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const { toast } = useToast();
  const { handleSubmit, control, register, setValue } = useForm<FormField>({
    defaultValues: {
      priority,
    },
  });

  const handlePriorityClick = () => {
    const newPriority = !priority; // Toggle priority value
    setPriority(newPriority); // Update local state
    setValue('priority', newPriority); // Update priority value in useForm
  };
  const onSubmit = async (data: FormField) => {
    const res = await axios.post('/api/task', {
      title: data.title,
      description: data.description,
      date: new Date(data?.date).toDateString(),
    });
    console.log(data);

    if (res?.data?.success) {
      action('task');
      setIsTaskModalOpen(false);
    } else if (res?.data?.success === false) {
      toast({
        variant: 'destructive',
        title: res?.data?.message,
        action: <ToastAction altText="Try again!">Try again!</ToastAction>,
      });
    }
  };

  return (
    <Dialog open={isTaskModalOpen}>
      <Button
        className="flex w-full justify-start gap-2"
        onClick={() => setIsTaskModalOpen(true)}>
        <div className="h-[25px] w-[25px] rounded-full bg-primary text-white text-center p-1 text-lg">
          <GoPlus />
        </div>
        Add Task
      </Button>

      <DialogContent className="xl:w-[1200px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="mt-4">
            <input
              placeholder="Title"
              className="focus:outline-none w-full px-3 text-[#bbbaba] border-2 "
              {...register('title')}
            />
            <DialogDescription>
              <input
                type="text"
                placeholder="Description"
                className="focus:outline-none w-full px-3 text-[#bbbaba] mt-3 border-2"
                {...register('description')}
              />
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-4 mt-4">
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
              className={`priority border flex gap-x-3 h-[35px] items-center pl-2 w-[150px] ${priority ? 'bg-green-500 text-white' : ''}`}
              onClick={handlePriorityClick}
              type="button">
              <Flag size={16} strokeWidth={1.5} />
              Priority
            </button>
          </div>
          <DialogFooter className="sm:justify-end">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsTaskModalOpen(false)}>
              Close
            </Button>

            <Button className="bg-primary text-white" type="submit">
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskModal;
