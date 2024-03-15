'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/app/_component/ui/button';
import { Checkbox } from '@/app/_component/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_component/ui/card';
import React from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/_component/form';

const items = [
  {
    id: 'recents',
    label: '이용약관 전체동의(선택항목에 대한 동의 포함)',
  },
  {
    id: 'home',
    label: '만 14세 이상입니다. (필수)',
  },
  {
    id: 'applications',
    label: '서비스 이용약관에 동의합니다. (필수)',
  },
  {
    id: 'desktop',
    label: '개인정보 수집•이용에 동의합니다. (필수)',
  },
  {
    id: 'downloads',
    label:
      '마케팅 수신・홍보 목적의 개인정보 수집 및 이용에 동의합니다. (선택)',
  },
  {
    id: 'documents',
    label: '장기 미접속 시 계정 활성 상태 유지합니다. (선택)',
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

export default function NHNAuthentication() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ['recents', 'home'],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <section>
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>의뢰인 정보</CardTitle>
          <CardDescription>
            - 본인 확인 후 구매가 가능합니다. (첫 결제 1회 한정)
            <br />- 인증된 정보에 따라 실명이 자동 업데이트됩니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem>
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">휴대폰 본인인증</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
