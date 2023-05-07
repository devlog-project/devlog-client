'use client';

import type { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';

import FormInput from '@/components/Common/moecules/FormInput';
import { REGEX } from '@/constatns/regex';
import { MESSAGE } from '@/constatns/validateMessage';
import useVisible from '@/hooks/useVisible';
import { postSendVerifyEmailCode, postValidateCode } from '@/networks/signup';

interface VerifyEmailProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
  watch: UseFormWatch<any>;
}

function VerifyEmail({ register, errors, watch }: VerifyEmailProps) {
  const [isVisible, handleChangeVisible] = useVisible();

  const handleVerifyEmail = async () => {
    const email = watch('email');

    if (email) {
      try {
        const res = await postSendVerifyEmailCode(email);
        handleChangeVisible();
      } catch (e: any) {
        console.error(e);
      }
    }
  };

  const handleVerifyCode = async () => {
    const [email, code] = watch(['email', 'code']);
    const data = {
      email,
      code,
    };

    if (email && code) {
      const res = await postValidateCode(data);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-1.5 justify-between items-center">
        <FormInput
          id="email"
          type="text"
          title="이메일"
          name="email"
          placeholder={MESSAGE.email.required}
          errors={errors}
          register={register}
          rules={{
            required: MESSAGE.email.required,
            pattern: {
              value: REGEX.email,
              message: MESSAGE.email.pattern,
            },
          }}
        />
        <button
          type="button"
          onClick={handleVerifyEmail}
          className="w-[100px] py-1.5 bg-blue-400 text-white box-border"
        >
          인증
        </button>
      </div>
      {!isVisible && (
        <div className="flex gap-1.5 justify-between items-center">
          <FormInput
            id="code"
            type="text"
            title="인증코드"
            name="code"
            placeholder={MESSAGE.code.required}
            errors={errors}
            register={register}
            rules={{
              required: MESSAGE.code.required,
            }}
          />
          <button
            type="button"
            onClick={handleVerifyCode}
            className="w-[100px] py-1.5 bg-blue-400 text-white box-border"
          >
            코드 확인
          </button>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;
