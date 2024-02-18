'use client';

import Inputs from '@/components/Input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
export default function RegisterForm() {
  const registerSchema = z.object({
    name: z.string().min(4, {
      message: 'Please enter a valid name',
    }),
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (value: z.infer<typeof registerSchema>) => {
    const res = await axios.post('/api/register', value);
    if (res.data.success) {
      console.log(res.data);
    } else {
      console.error(res.data);
    }
  };

  return (
    <div className="p-4">
      <form
        className=" h-[400px] w-[400px] p-4 mt-8 "
        onSubmit={handleSubmit(onSubmit)}>
        <h4 className="text-xl">Create an Account</h4>
        <Inputs
          placeholder="Name"
          className="border-2 rounded-lg w-full mt-3"
          {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <Inputs
          placeholder="Email"
          className="border-2 rounded-lg w-full mt-4"
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <Inputs
          placeholder="Password"
          className="border-2 rounded-lg w-full mt-4"
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <div className="mt-4 text-sm">
          Already and Account
          <Link href="/login" className="text-primary ml-1">
            Login
          </Link>
        </div>
        <Button className="mt-4 w-full rounded-2xl" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}
