import { connect } from '@/db/dbConfig';
import User from '@/modals/userModal';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
connect();
export const POST = async (request: NextRequest) => {
   try {
      const reqBody = await request.json();
      const { email, password } = reqBody;
      if (!email || !password) {
         return NextResponse.json({
            success: false,
            message: 'Please provide all required information',
            status: 404,
         });
      }
      const isUser = await User.findOne({ email });
      if (!isUser) {
         return NextResponse.json({
            status: 404,
            message: 'user not found',
            success: false,
         });
      }
      const validatePassword = await bcrypt.compare(password, isUser.password);
      if (!validatePassword) {
         return NextResponse.json({
            success: false,
            message: 'Invalid password',
            status: 404,
         });
      }
      const secretKey = process.env.SECRET_KEY;
      if (!secretKey) {
         throw new Error('Invalid secret key');
      }
      const token = jwt.sign({ userId: isUser._id }, secretKey);
      const response = NextResponse.json({
         message: 'Login successful',
         success: true,
         isUser,
      });
      response.cookies.set('token', token, { httpOnly: true });
      return response;
   } catch (error) {
      return NextResponse.json({ error: error, status: 500 });
   }
};
