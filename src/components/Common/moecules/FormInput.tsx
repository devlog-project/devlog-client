import type { UseFormRegister, RegisterOptions, FieldErrors, FieldValues } from 'react-hook-form';

import Input from '../atoms/Input';

interface LoginInputProps {
  type: string;
  id: string;
  title: string;
  placeholder: string;
  name: string;
  register?: UseFormRegister<any>;
  rules?: RegisterOptions;
  errors: FieldErrors<FieldValues>;
}

function FormInput({
  id,
  type,
  title,
  placeholder,
  register,
  name,
  rules,
  errors,
}: LoginInputProps) {
  return (
    <div className="w-full flex flex-col gap-1.5 h-24">
      <label className="font-bold" htmlFor={id}>
        {title}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        register={register}
        name={name}
        rules={rules}
      />
      {errors[name] && (
        <span className="text-rose-600 font-bold self-end text-sm py-[3px]">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
}

export default FormInput;
