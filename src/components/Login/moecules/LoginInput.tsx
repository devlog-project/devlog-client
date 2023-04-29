import Input from '@/components/Common/Input';

interface LoginInputProps {
  type: string;
  id: string;
  title: string;
  placeholder: string;
  error?: any;
}

function LoginInput({ id, type, title, placeholder, error }: LoginInputProps) {
  return (
    <div className="flex flex-col gap-1.5 h-24">
      <label className="font-bold" htmlFor={id}>
        {title}
      </label>
      <Input id={id} type={type} placeholder={placeholder} />
      {error && <span className="text-rose-600 font-bold self-end"> {'에러입니다.'} </span>}
    </div>
  );
}

export default LoginInput;
