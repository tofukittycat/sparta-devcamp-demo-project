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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_component/ui/select';
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
  userRoles,
} from '@/lib/RegisterFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Home() {
  const [step, setStep] = useState<number>(0);

  const form = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      username: '',
      phone: '',
      role: '',
      password: '',
      passwordCheck: '',
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
          <CardTitle>계정을 생성합니다! 👋</CardTitle>
          <CardDescription>필수 정보를 입력해주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              <div className="grid w-full items-center gap-4">
                <motion.div
                  className={cn('space-y-3')}
                  animate={{ translateX: `${step * -100}%` }}
                  transition={{ ease: 'easeInOut' }}
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>연락처</FormLabel>
                        <FormControl>
                          <Input placeholder="01000000000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>역할</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="역할을 선택해주세요" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                              {userRoles.map((role) => (
                                <SelectItem key={role} value={role}>
                                  {role}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <motion.div
                  className={cn('space-y-3 absolute top-0 left-0 right-0')}
                  animate={{ translateX: `${(1 - step) * 100}%` }}
                  style={{ translateX: `${(1 - step) * 100}%` }}
                  transition={{
                    ease: 'easeInOut',
                  }}
                >
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
                  <FormField
                    control={form.control}
                    name="passwordCheck"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>비밀번호 확인</FormLabel>
                        <FormControl>
                          <Input type={'password'} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>
              <div className="flex gap-2 my-4 mx-auto">
                <Button className={cn({ hidden: step === 0 })} type="submit">
                  계정 등록하기
                </Button>
                <Button
                  type="button"
                  className={cn({ hidden: step === 1 })}
                  onClick={() => {
                    form.trigger(['phone', 'email', 'username', 'role']);
                    const emailState = form.getFieldState('email');
                    const phoneState = form.getFieldState('phone');
                    const usernameState = form.getFieldState('username');
                    const roleState = form.getFieldState('role');

                    if (!phoneState.isDirty || phoneState.invalid) return;
                    if (!emailState.isDirty || emailState.invalid) return;
                    if (!usernameState.isDirty || usernameState.invalid) return;
                    if (!roleState.isDirty || roleState.invalid) return;

                    setStep(1);
                  }}
                >
                  다음 단계로 👉
                </Button>
                <Button
                  type="button"
                  variant={'ghost'}
                  className={cn({ hidden: step === 0 })}
                  onClick={() => {
                    setStep(0);
                  }}
                >
                  이전 단계로
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
