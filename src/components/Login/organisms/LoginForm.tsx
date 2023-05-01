import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

import Modal from '@/components/Common/Modal';
import { REGEX } from '@/constatns/regex';
import { MESSAGE } from '@/constatns/validateMessage';
import useVisible from '@/hooks/useVisible';
import { postLoginUser } from '@/networks/login';
import { User } from '@/types/User';

import LoginInput from '../moecules/LoginInput';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<User, 'username' | 'password'>>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });
  const [isVisible, handleChangeVisible] = useVisible();

  const handleLoginSubmit = async (data: FieldValues) => {
    const { username, password } = data;

    if (username && password) {
      const response = await postLoginUser(data);

      console.log(response);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)} className="w-2/6 flex flex-col gap-5">
      <LoginInput
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
      <LoginInput
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
      <span
        className="cursor-pointer self-end text-black hover:font-bold"
        onClick={handleChangeVisible}
      >
        비밀번호를 찾으시겠어요?
      </span>
      <button type="submit" className="px-5 py-1 bg-blue-400 text-white rounded-md">
        로그인
      </button>
      <Modal visible={isVisible} title="비밀번호 찾기" onCancel={handleChangeVisible} />
    </form>
  );
}

export default LoginForm;
