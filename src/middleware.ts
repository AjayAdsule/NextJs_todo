import axios from 'axios';
import {
  NextResponse,
  type NextRequest,
  type NextFetchEvent,
} from 'next/server';

export const middleware = async (req: NextRequest, event: NextFetchEvent) => {
  const path = req.nextUrl.pathname;
  if (path === '/home') {
    return NextResponse.redirect(new URL('/home/today', req.nextUrl));
  }
  if (path === '/home/all') {
    const data = await fetch('http://localhost:3000/api/task');
    if (data.ok) {
      const res = await data.json();
      console.log(res.taskData[0]?._id);
      let id = res.taskData[0]?._id;
      return NextResponse.redirect(new URL(`/home/all/${id}`, req.nextUrl));
    } else {
      console.error('error fetching');
    }
  }
};

export const config = {
  matcher: ['/', '/home', '/home/today', '/home/all'],
};
