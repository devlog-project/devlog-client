'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/Common/Button';

function Login() {
  const router = useRouter();

  const handleKaKaoLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;

    router.push(KAKAO_AUTH_URL);
  };

  if (typeof window !== 'object') return <></>;

  return (
    <section>
      <div>
        <Button
          title="카카오 로그인"
          imgUrl="Kakao.png"
          bgColor="#fae100"
          onClick={handleKaKaoLogin}
        />
      </div>
    </section>
  );
}

export default Login;
