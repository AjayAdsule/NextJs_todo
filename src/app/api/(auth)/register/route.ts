import { connect } from '@/db/dbConfig';
import User from '@/modals/userModal';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
connect();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'please provide all details' },
        { status: 401 }
      );
    }
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return NextResponse.json(
        { error: 'user already exists' },
        { status: 401 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    return NextResponse.json({ status: 201, newUser, success: true });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
