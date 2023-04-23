import Image from 'next/image';

import MainLogo from '../../../../public/images/Logo.png';

export default function Header() {
  return (
    <header className="h-16 shadow-md">
      <nav className="flex h-full max-w-7xl m-auto justify-between items-center">
        <a href="/" className="flex h-full items-center gap-3">
          <Image src={MainLogo} alt="MAIN_LOGO" width={30} height={30} />
          <span className="text-2xl font-bold"> devlog </span>
        </a>
        <ul className="flex gap-4">
          <li>
            <a href="login" className="hover-effect">
              로그인
            </a>
          </li>
          <li>
            <a href="signup" className="hover-effect">
              회원가입
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
