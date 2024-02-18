'use client';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

interface CalenderProps {
  mode: 'default' | 'range' | 'single' | 'multiple';
  selected: Date;
  onSelect: (selectedDate: Date) => void;
}

export default function CustomCalender({
  mode,
  selected,
  onSelect,
}: CalenderProps) {
  const [date, setDate] = useState<Date>();
  const currDate = new Date();
  const [year, month, dates] = [
    currDate.getFullYear(),
    currDate.getMonth(),
    currDate.getDate(),
  ];

  const handleSelectDate = (selectedDate: Date) => {
    setDate(selectedDate);
    onSelect(selectedDate);
  };
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[200px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}>
            <CalendarIcon className="mr-2 " size={16} strokeWidth={1} />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode={mode}
            selected={selected}
            onSelect={handleSelectDate}
            fromYear={year}
            fromMonth={new Date(year, month, dates)}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
