import { connect } from '@/db/dbConfig';
import Task from '@/modals/taskModal';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: {
    id: string;
  };
}

connect();

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const getTasks = await Task.findById({ _id: params.id });
  return Response.json({ success: true, task: getTasks, status: 201 });
}

export async function PATCH(req: NextRequest, { params }: Params) {
  const body = await req.json();
  const { title, description, isCompleted, completeDay, priority } = body;
  const updatedTask = await Task.findByIdAndUpdate(
    params.id,
    { title, description, isCompleted, completeDay, priority },
    { new: true }
  );
  if (!updatedTask) {
    return NextResponse.json({
      status: 500,
      message: 'Task not found',
      success: false,
    });
  }
  return Response.json({
    status: 201,
    message: 'Task updated',
    success: true,
    updatedTask,
  });
}

export const DELETE = async (req: NextRequest, { params }: Params) => {
  console.log(params);
  const deletedTask = await Task.findByIdAndDelete(params.id);
  if (!deletedTask) {
    return NextResponse.json({ success: false, message: 'Task not found' });
  }
  return NextResponse.json({
    success: true,
    message: 'Task deleted',
    deletedTask,
  });
};
