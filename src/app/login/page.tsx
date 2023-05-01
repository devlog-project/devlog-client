'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import LoadingSpinner from '@/components/Common/LoadingSpinner';

const DynamicLoginPage = dynamic(() => import('@/components/Login/templates/LoginTemplates'), {
  ssr: false,
});

function Login() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DynamicLoginPage />
    </Suspense>
  );
}

export default Login;
