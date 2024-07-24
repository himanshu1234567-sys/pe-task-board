import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import LoginForm from '../LoginForm';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (credentials: { username: string; password: string }) => {
    // Implement actual authentication logic here
    login();
    router.push('/dashboard');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
