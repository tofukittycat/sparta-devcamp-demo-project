'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_component/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/_component/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_component/ui/select';
import { Button } from '@/app/_component/ui/button';
import { Input } from '@/app/_component/ui/input';

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
});

function onSubmit(data: z.infer<typeof FormSchema>) {
  // toast({
  //   title: "You submitted the following values:",
  //   description: (
  //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //     </pre>
  //   ),
  // })
}

export default function PaymentAmount() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <section>
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>쿠폰/포인트</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex items-center content-center">
                    <FormLabel>사용 가능한 쿠폰</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex items-center content-center">
                    <FormLabel>포인트</FormLabel>
                    <Input />
                    <Button type="submit">전액사용</Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormDescription>보유 포인트 : 0원</FormDescription>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
