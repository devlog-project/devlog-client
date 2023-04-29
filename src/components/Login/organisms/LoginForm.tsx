import LoginInput from '../moecules/LoginInput';

function LoginForm() {
  return (
    <form className="w-2/6 flex flex-col gap-5">
      <LoginInput id="email" type="text" title="이메일" placeholder="이메일을 입력해주세요." />
      <LoginInput
        id="password"
        type="password"
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요."
      />
    </form>
  );
}

export default LoginForm;
