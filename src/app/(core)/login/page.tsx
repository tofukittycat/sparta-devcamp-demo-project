'use client';

import { Button } from '@/app/_component/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_component/ui/card';
import { Input } from '@/app/_component/ui/input';

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

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle>반갑습니다! 👋</CardTitle>
          <CardDescription>로그인 정보를 입력해주세요.</CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </main>
  );
}
