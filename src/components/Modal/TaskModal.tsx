'use client';

import { Dialog, DialogContent } from '../ui/dialog';
import CustomToolTip from '../CustomToolTip';
import { TaskData } from '../TodayPage/common';
import { Ban, Bell, CheckCircle, Hash, NotepadText, X } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import Inputs from '../Input';
import { Button } from '../ui/button';

const TaskModal = ({
  id,
  isModalOpen,
  setIsModalOpen,
  task,
}: {
  id: string;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  task: TaskData;
}) => {
  const formSchema = z.object({
    title: z.string(),
    description: z.string(),
  });

  const { handleSubmit, register } = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: task?.title,
      description: task?.description,
    },
  });

  return (
    <Dialog open={isModalOpen}>
      <DialogContent>
        <form>
          <div>
            <div className="header flex gap-2 justify-end">
              <CustomToolTip message="Remove From my day">
                <Ban size={20} strokeWidth={1} className="text-primary" />
              </CustomToolTip>
              <CustomToolTip message="Mark as done">
                <CheckCircle size={20} strokeWidth={1} />
              </CustomToolTip>

              <CustomToolTip message="Close">
                <X
                  size={20}
                  strokeWidth={1}
                  onClick={() => setIsModalOpen(!isModalOpen)}
                />
              </CustomToolTip>
            </div>
            <div className="modal_body mt-2">
              <Inputs
                type="text"
                {...register('title')}
                className="w-full  hover:bg-[#f6f6f6] font-semibold text-xl"
              />
              <div className="flex highlight_btn  mt-2 gap-2">
                <Button
                  className="bg-[#fff] text-black rounded-2xl text-[0.8rem] shadow-lg hover:-translate-y-0.5"
                  variant="default">
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
                  <NotepadText
                    strokeWidth={1}
                    className="text-orange-500 mr-2"
                  />
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
                <textarea
                  className="w-full resize-y min-h-24 overflow-hidden focus:outline-none p-1 border-2 border-gray-300"
                  {...register('description')}
                />
              </div>
              <div className="footer flex justify-end mt-4 gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                  type="button">
                  Cancel
                </Button>
                <Button>Submit</Button>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
