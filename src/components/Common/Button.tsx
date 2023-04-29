'use client';

import Image from 'next/image';

interface OauthMapping {
  [key: string]: {
    bgColor: string;
  };
}

interface ButtonProps {
  title: string;
  imgUrl: string;
  oauth: string;
  color?: string;
  onClick?: () => void;
}

const oauthMapping: OauthMapping = {
  kakao: { bgColor: 'bg-[#fae100]' },
};

function Button({ title, imgUrl, oauth, color, onClick }: ButtonProps) {
  const { bgColor } = oauthMapping[oauth] || oauthMapping.kakao;

  return (
    <button
      type="button"
      className={`${bgColor} flex items-center justify-between px-5 py-1 box-border rounded-md gap-1`}
      onClick={onClick}
    >
      <Image src={`/images/${imgUrl}`} alt={title} width={30} height={30} />
      <span className="font-bold"> {title} </span>
    </button>
  );
}

export default Button;
