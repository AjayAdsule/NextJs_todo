import { connect } from '@/db/dbConfig';
import Task from '@/modals/taskModal';
import { NextRequest, NextResponse } from 'next/server';

connect();

interface RequestBody {
  title: string;
  description: string;
  userId: number;
  date: string; // Assuming date is a Date object
}

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { title, description, userId, date }: RequestBody = reqBody;
    const dateOnly = new Date(date).toISOString();
    console.log({ title, description, userId, dateOnly, date });
    let demoDate = new Date(date).toLocaleDateString();

    if (!title) {
      return NextResponse.json({
        success: false,
        message: 'please provide a title and user ID',
        status: 401,
      });
    }

    const newTask = new Task({
      title,
      description,
      userId,
      date: demoDate,
    });
    await newTask.save();
    return NextResponse.json({
      success: true,
      message: 'Task created successfully',
      status: 201,
      newTask,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: 'Error while adding Task',
      status: 500,
    });
  }
};

// get all tasks

export async function GET(req: NextRequest) {
  const taskData = await Task.find();
  if (!taskData) {
    return NextResponse.json({
      success: false,
      message: 'Task not found',
      status: 404,
    });
  }
  return NextResponse.json({
    success: true,
    message: 'Task',
    status: 201,
    taskData,
  });
}

// export const DELETE = async (req: NextRequest) => {
//   const reqBody = await req.json();
//   const { id } = reqBody;
//   const deletedTask = await Task.findByIdAndDelete(id);
//   if (!deletedTask) {
//     return NextResponse.json({ success: false, message: 'Task not found' });
//   }
//   return NextResponse.json({
//     success: true,
//     message: 'Task deleted',
//     deletedTask,
//   });
// };
