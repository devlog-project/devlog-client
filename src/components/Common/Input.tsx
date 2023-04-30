import type { UseFormRegister, RegisterOptions } from 'react-hook-form';

interface InputProps {
  id?: string;
  type: string;
  name: string;
  placeholder: string;
  rules?: RegisterOptions;
  register?: UseFormRegister<any>;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
}

function Input({ id, type, placeholder, name, rules, register, onChange, onBlur }: InputProps) {
  return (
    <input
      className="w-full border border-solid border-inherit rounded px-3 py-2 text-sm"
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      {...(register && register(name, rules))}
    />
  );
}

export default Input;
