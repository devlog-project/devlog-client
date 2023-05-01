'use client';

import LoginForm from '../organisms/LoginForm';
import SocialLogin from '../organisms/SocialLogin';

function LoginTemplates() {
  return (
    <section className="container h-full mt-40 relative flex flex-col items-center justify-center h-full gap-5">
      <LoginForm />
      <SocialLogin />
    </section>
  );
}

export default LoginTemplates;
