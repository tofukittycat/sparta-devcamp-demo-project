import { z } from 'zod';

export const userRoles = ['관리자', '일반 사용자'] as const;

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const phoneRegex = /^010\d{8}$/;

export type RegisterFormSchemaType = z.infer<typeof registerFormSchema>;

export const registerFormSchema = z
  .object({
    email: z
      .string()
      .nonempty('이메일을 입력해주세요.')
      .email('이메일 형식(ex. hello@sparta-devcamp.com)으로 입력해주세요.')
      .transform((value) => value.toLowerCase()),
    username: z
      .string()
      .min(2, {
        message: '2글자 이상 입력해주세요.',
      })
      .max(10, { message: '이름은 10글자 이하이어야 합니다.' })
      .nonempty('이름을 입력해주세요.'),
    phone: z
      .string()
      .min(11, {
        message: '11자리(ex. 01012345678) 형식으로 입력해주세요.',
      })
      .max(11, {
        message: '11자리(ex. 01012345678) 형식으로 입력해주세요.',
      })
      .nonempty('번호를 입력해주세요.')
      .refine(
        (value) => phoneRegex.test(value),
        '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'
      ),
    role: z.string().min(2, { message: '역할을 선택해주세요.' }),
    password: z
      .string()
      .nonempty('비밀번호를 입력해주세요.')
      .refine(
        (value) => passwordRegex.test(value),
        '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'
      ),
    passwordCheck: z.string().nonempty('비밀번호를 다시 입력해주세요.'),
  })
  .refine((value) => value.password === value.passwordCheck, {
    path: ['passwordCheck'],
    message: '비밀번호가 일치하지 않습니다.',
  });
