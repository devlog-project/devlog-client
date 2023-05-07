import { useRouter } from 'next/navigation';

import Button from '@/components/Common/atoms/Button';

function SocialLogin() {
  const router = useRouter();

  const handleKaKaoLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;

    router.push(KAKAO_AUTH_URL);
  };

  return (
    <div className="flex flex-col items-center w-2/4">
      <Button title="카카오 로그인" imgUrl="Kakao.png" oauth="kakao" onClick={handleKaKaoLogin} />
    </div>
  );
}

export default SocialLogin;
