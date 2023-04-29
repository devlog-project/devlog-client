import Modal from '@/components/Common/Modal';
import useVisible from '@/hooks/useVisible';

import LoginInput from '../moecules/LoginInput';

function LoginForm() {
  const [isVisible, handleChangeVisible] = useVisible();

  return (
    <form className="w-2/6 flex flex-col gap-5">
      <LoginInput id="email" type="text" title="이메일" placeholder="이메일을 입력해주세요." />
      <LoginInput
        id="password"
        type="password"
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요."
      />
      <span
        className="cursor-pointer self-end text-blue-600 hover:font-bold"
        onClick={handleChangeVisible}
      >
        비밀번호를 찾으시겠어요?
      </span>
      <Modal visible={isVisible} title="비밀번호 찾기" onCancel={handleChangeVisible} />
    </form>
  );
}

export default LoginForm;
