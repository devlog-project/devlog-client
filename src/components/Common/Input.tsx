interface InputProps {
  id?: string;
  type: string;
  placeholder: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
}

function Input({ id, type, placeholder, onChange, onBlur }: InputProps) {
  return (
    <input
      className="w-full border border-solid border-inherit rounded px-3 py-2 text-sm"
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

export default Input;
