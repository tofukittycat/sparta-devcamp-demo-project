'use client';

import { Input } from '@/app/_component/ui/input';
import { Button } from '@/app/_component/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/_component/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  RegisterFormSchemaType,
  registerFormSchema,
} from '@/lib/RegisterFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

export default function LoginModal() {
  const form = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterFormSchemaType> = (data) => {
    console.log(data);
  };

  // const onSubmit = (data: z.infer<typeof registerFormSchema>) => {
  //   console.log(data);
  //   console.log('zzzz');
  // };

  return (
    <div className="fixed inset-0 z-50 bg-black/80">
      <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <h2 className="text-lg font-semibold">로그인 모달</h2>
          <p className="text-sm text-muted-foreground">로그인 안내문구</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              <div className="grid w-full items-center gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="hello@sparta-devcamp.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>비밀번호</FormLabel>
                      <FormControl>
                        <Input type={'password'} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-2 my-4 mx-auto">
                <Button type="submit">로그인 🔥</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
