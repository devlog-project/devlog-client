'use client';

import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

import FormInput from '@/components/Common/moecules/FormInput';
import { REGEX } from '@/constatns/regex';
import { MESSAGE } from '@/constatns/validateMessage';
import { User } from '@/types/User';

import VerifyEmail from '../moecules/VerifyEmail';

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSignupSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSignupSubmit)} className="w-2/6 flex flex-col gap-5">
      <FormInput
        id="username"
        type="text"
        title="아이디"
        name="username"
        placeholder={MESSAGE.username.required}
        errors={errors}
        register={register}
        rules={{
          required: MESSAGE.username.required,
          pattern: {
            value: REGEX.username,
            message: MESSAGE.username.pattern,
          },
        }}
      />
      <FormInput
        id="nickname"
        type="text"
        title="닉네임"
        name="nickname"
        placeholder={MESSAGE.nickname.required}
        errors={errors}
        register={register}
        rules={{
          required: MESSAGE.nickname.required,
        }}
      />
      <VerifyEmail register={register} errors={errors} watch={watch} />
      <FormInput
        id="password"
        type="password"
        title="비밀번호"
        name="password"
        placeholder={MESSAGE.password.required}
        errors={errors}
        register={register}
        rules={{
          required: MESSAGE.password.required,
          pattern: {
            value: REGEX.password,
            message: MESSAGE.password.pattern,
          },
        }}
      />
      <button type="submit" className="px-5 py-1 bg-blue-400 text-white rounded-md">
        회원가입
      </button>
    </form>
  );
}

export default SignupForm;
