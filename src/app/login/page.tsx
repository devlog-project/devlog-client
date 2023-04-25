'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const DynamicButton = dynamic(() => import('@/components/Common/Button'), {
  ssr: false,
});

function Login() {
  const router = useRouter();

  const handleKaKaoLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;

    router.push(KAKAO_AUTH_URL);
  };

  return (
    <section>
      <div>
        <DynamicButton
          title="카카오 로그인"
          imgUrl="Kakao.png"
          oauth="kakao"
          onClick={handleKaKaoLogin}
        />
      </div>
    </section>
  );
}

export default Login;
