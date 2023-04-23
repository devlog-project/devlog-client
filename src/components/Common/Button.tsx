'use client';

import Image from 'next/image';

interface ButtonProps {
  title: string;
  imgUrl: string;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
}

function Button({ title, imgUrl, bgColor, color, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={`bg-[${bgColor}] flex items-center px-5 py-1 box-border rounded-md gap-1`}
      onClick={onClick}
    >
      <span className="font-bold"> {title} </span>
      <Image src={`/images/${imgUrl}`} alt={title} width={30} height={30} />
    </button>
  );
}

export default Button;
