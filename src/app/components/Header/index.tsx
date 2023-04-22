import Image from 'next/image';

import MainLogo from '../../../../public/Logo.png';

export default function Header() {
  return (
    <header className="flex">
      <div className="flex">
        <a href="/">
          <Image src={MainLogo} alt="MAIN_LOGO" />
        </a>
      </div>
      <nav className="flex">
        <a href="login"> 로그인 </a>
      </nav>
    </header>
  );
}
