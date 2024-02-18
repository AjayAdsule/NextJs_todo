'use client';

import Inputs from '@/components/Input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const formSchema = z.object({
    email: z.string().email({
      message: 'Please provide a valid email address',
    }),
    password: z.string(),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    const res = await axios.post('/api/login', value);
    if (res.data.success) {
      router.push('/home');
    } else {
      toast({
        variant: 'destructive',
        title: res.data.message,
        action: <ToastAction altText="Try again!">Try again!</ToastAction>,
      });
    }
  };
  return (
    <div className="p-4">
      <form
        className=" h-[400px] w-[400px] p-4 flex flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-2xl  font-semibold">Hello Again!</h5>
        <p className="text-sm">Welcome back</p>
        <div className="input_feild mt-4">
          <Inputs
            placeholder="Email"
            className="border-2 rounded-lg w-full"
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <Inputs
            placeholder="Password"
            className="border-2 rounded-lg w-full mt-4"
            {...register('password')}
          />
          <div className="mt-4 text-sm">
            New user?{' '}
            <Link href="/register" className="text-primary">
              Register{' '}
            </Link>
          </div>
          <Button className="mt-4 w-full rounded-2xl" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
