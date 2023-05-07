'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import LoadingSpinner from '@/components/Common/atoms/LoadingSpinner';

function Kakao() {
  const code = useSearchParams().get('code');

  useEffect(() => {
    // 추후 서버로 Code 보내는 코드 추가
    console.log(code);
  }, []);

  return <LoadingSpinner />;
}

export default Kakao;
